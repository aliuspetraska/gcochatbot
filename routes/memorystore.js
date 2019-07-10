const config = require('../config');
const R = require('ramda');

class MemoryStore {
  constructor() {
    this.store = [];
  }

  get(id) {
    const index = R.findIndex(R.propEq('conversationId', id))(this.store);

    if (index >= 0) {
      return this.store[index];
    }

    return {};
  }

  set(id, data) {
    const index = R.findIndex(R.propEq('conversationId', id))(this.store);

    const prepared = {
      conversationId: id,
      context: data,
    };

    if (index >= 0) {
      this.store[index] = prepared;
    } else {
      this.store.push(prepared);
    }

    setTimeout(() => {
      this.del(id);
    }, config.expirationTime);
  }

  del(id) {
    const index = R.findIndex(R.propEq('conversationId', id))(this.store);

    if (index >= 0) {
      this.store = this.store.splice(index, 1);
    }
  }
}

module.exports = {
  MemoryStore,
};
