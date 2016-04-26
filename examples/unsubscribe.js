'use strict';

const Rx = require('rxjs/Rx');

const counter = Rx.Observable.interval(100);
const subscriptionA = counter.subscribe(i => console.log(`A ${i}`));
const subscriptionB = counter.subscribe(i => console.log(`B ${i}`));

setTimeout(() => {
  console.log(`Cancelling subscriptionB`);
  subscriptionB.unsubscribe();
}, 500);
