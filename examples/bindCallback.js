'use strict';

const Rx = require('rxjs/Rx');

const hello = (message, callback) => callback(`Hello ${message}`);
const sayHello = Rx.Observable.bindCallback(hello);
const source = sayHello(`World`);

source.subscribe(result => console.log(result),
                 error => console.error(error),
                 () => console.log('done'));
