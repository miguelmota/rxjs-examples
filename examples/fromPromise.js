'use strict';

const Rx = require('rxjs/Rx');

const promise = new Promise((resolve, reject) => resolve('Hello World'));

const subscription = Rx.Observable.fromPromise(promise)
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
