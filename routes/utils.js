const jwt = require('jsonwebtoken');
const uuidv1 = require('uuid/v1');
const R = require('ramda');

const convertOptions = options => {
  const returned = [];

  options.forEach(option => {
    returned.push({
      label: R.path(['label'], option),
      value: R.path(['value', 'input', 'text'], option),
    });
  });

  return returned;
};

const decodeToken = token => {
  if (token && token.startsWith('Bearer ')) {
    return jwt.decode(token.slice(7, token.length));
  } else {
    return {};
  }
};

const outputMessage = result => {
  const messageAnswers = [];

  const items = R.pathOr([], ['output', 'generic'], result);

  items.forEach(item => {
    messageAnswers.push({
      responseType: R.path(['response_type'], item),
      text: R.path(['text'], item),
      title: R.path(['title'], item),
      description: R.path(['description'], item),
      imageSource: R.path(['source'], item),
      optionList: convertOptions(R.pathOr([], ['options'], item)),
      answerId: uuidv1(),
    });
  });

  if (messageAnswers.length === 0) {
    messageAnswers.push({
      responseType: 'text',
      text: 'Error Occurred. Something is wrong with the conversation.',
      answerId: uuidv1(),
    });
  }

  return {
    messageAnswers: messageAnswers,
    conversationId: R.pathOr(0, ['context', 'conversation_id'], result),
    logMessages: [],
    intents: R.pathOr([], ['intents'], result),
    context: JSON.stringify(R.pathOr('', ['context'], result)),
    wrongAnswersCounter: R.pathOr(0, ['context', 'wrongAnswersCounter'], result),
    answerId: 0
  };
};

module.exports = {
  decodeToken,
  outputMessage,
};
