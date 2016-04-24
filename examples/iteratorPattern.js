'use strict';

function Iterator(items) {
  this.index = 0;
  this.items = items;
}

Iterator.prototype = {
  first() {
    this.reset();
    return this.next();
  },
  next() {
    return this.items[this.index++];
  },
  hasNext() {
    return this.index <= this.items.length;
  },
  reset() {
    this.index = 0;
  },
  each(callback) {
    for (let item = this.first(); this.hasNext(); item = this.next()) {
      callback(item);
    }
  }
};

const items = ['foo', 'bar', 'baz', 'qux'];
const iterator = new Iterator(items);

iterator.each(value => console.log(value));
