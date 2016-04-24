'use strict';

class Producer {
  constructor() {
    this.listeners = [];
  }

  add(listener) {
    this.listeners.push(listener);
  }

  remove(listener) {
    var index = this.listeners.indexOf(listener);
    this.listeners.splice(index, 1);
  }

  notify(message) {
    this.listeners.forEach(listener => listener(message))
  }
}

function listener(message) {
  console.log(`Listener received message: ${message}`);
}

const notifier = new Producer();

notifier.add(listener);
notifier.notify('Hello');

