'use strict';

const Rx = require('rxjs/Rx');

const promise = new Promise((resolve, reject) => setTimeout(resolve, 2000));

promise.then(() => console.log('Potential side effect'));

const subscription = Rx.Observable.fromPromise(promise)
.subscribe(x => console.log('Observable resolved'),
           error => console.error(error),
           () => console.log('done'));

subscription.unsubscribe();
