'use strict';

const Rx = require('rx');

const promise = new Promise((resolve, reject) => window.setTimeout(resolve, 2000));

promise.then(() => console.log('Potential side effect'));

const subscription = Rx.Observable.fromPromise(promise)
.subscribe(msg => console.log('Observable resolved'));

subscription.dispose();
