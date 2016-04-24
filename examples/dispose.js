'use strict';

const Rx = require('rx');

const counter = Rx.Observable.interval(100);
const subscriptionA = counter.subscribe(i => console.log(`A ${i}`));
const subscriptionB = counter.subscribe(i => console.log(`B ${i}`));

setTimeout(() => {
  console.log('Canceling subscriptionB');
  subscriptionB.dispose();
}, 500);
