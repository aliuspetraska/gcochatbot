const CosmosClient = require('@azure/cosmos').CosmosClient;
const { decodeToken, outputMessage } = require('./utils');
const AssistantV1 = require('ibm-watson/assistant/v1');
const { MemoryStore } = require('./memorystore');
const middleware = require('./middleware');
const config = require('../config');
const express = require('express');
const uuidv1 = require('uuid/v1');
const moment = require('moment');
const router = express.Router();
const R = require('ramda');

const cosmos = new CosmosClient({
  endpoint: config.endpoint,
  auth: {
    masterKey: config.masterKey
  }
});

const memostore = new MemoryStore();
const assistant = new AssistantV1({
  version: config.version,
  iam_apikey: config.iam_apikey,
  url: config.url
});

const findItem = answerId => {
  const querySpec = {
    query: `SELECT * FROM container c WHERE c.answerId = "${answerId}"`,
  };

  return new Promise(resolve => {
    cosmos.database(config.database).container(config.container).items.query(querySpec, { enableCrossPartitionQuery:true }).toArray()
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        resolve([]);
      });
  });
};

const addItem = item => {
  return new Promise(resolve => {
    cosmos.database(config.database).container(config.container).items.create(item).then(() => {
      resolve();
    }).catch(error => {
      resolve();
    });
  });
};

const updateItem = (id, doc) => {
  return new Promise(resolve => {
    cosmos.database(config.database).container(config.container).item(id).replace(doc).then(() => {
      resolve();
    }).catch(error => {
      resolve();
    });
  });
};

const postMessage = (text, context, store) => {
  return new Promise((resolve, reject) => {
    assistant.message({
      workspace_id: config.workspaceId,
      input: {
        text: text,
      },
      context: context
    }).then(result => {
      memostore.set(
        R.pathOr(0, ['context', 'conversation_id'], result),
        R.pathOr({}, ['context'], result));

      const output = outputMessage(result);

      if (store) {
        output['messageAnswers'].forEach(async answer => {
          await addItem({
            id: uuidv1(),
            conversationId: output['conversationId'],
            answerId: answer['answerId'],
            rating: -1,
            question: text,
            comment: null,
            timestamp: parseInt(moment().utc().format('X')),
          });
        });
      }

      resolve(output);
    }).catch(error => {
      reject({ message: error['message'] });
    });
  });
};

const getName = bearer => {
  const token = decodeToken(bearer);
  const givenName = R.pathOr(undefined, ['given_name'], token);
  const name = R.pathOr(undefined, ['name'], token);
  return givenName || name;
};

router.get('/Conversation/initConversation', middleware.authorization, (req, res) => {
  const name = getName(req.header('authorization'));

  postMessage('', { name: name }, false)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

router.post('/Conversation/message', middleware.authorization, (req, res) => {
  const conversationId = req.body['conversationId'] || 0;

  const store = memostore.get(conversationId) || {};
  const text = req.body['text'] || '';

  postMessage(text, R.pathOr({}, ['context'], store), true)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

router.post('/Rating/rate', middleware.authorization, async (req, res) => {
  const answerId = req.body['answerId'] || 0;
  const rating = req.body['rating'] || 0;

  const items = await findItem(answerId);
  items['result'].forEach(async item => {
    item['timestamp'] = parseInt(moment().utc().format('X'));
    item['rating'] = rating;

    await updateItem(item['id'], item);
  });

  res.status(200).json({});
});

router.post('/Rating/comment', middleware.authorization, async (req, res) => {
  const answerId = req.body['answerId'] || 0;
  const comment = req.body['comment'] || '';

  const items = await findItem(answerId);
  items['result'].forEach(async item => {
    item['timestamp'] = parseInt(moment().utc().format('X'));
    item['comment'] = comment;

    await updateItem(item['id'], item);
  });

  res.status(200).json({});
});

module.exports = router;
