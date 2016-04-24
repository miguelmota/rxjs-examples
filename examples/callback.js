'use strict';

const Rx = require('rx');

function hello(message, callback) {
  return callback(`Hello ${message}`);
}

const sayHello = Rx.Observable.fromCallback(hello);
const source = sayHello(`World`);

source.subscribe(result => console.log(result));

