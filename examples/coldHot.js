'use strict';

const Rx = require('rxjs/Rx');

const source = Rx.Observable.interval(100);
const publisher = source.publish();

var observerA = publisher.subscribe(x => console.log(`Observer A: ${x}`))

publisher.connect();

setTimeout(() => {
  const observerB = publisher.subscribe(x => console.log(`Observer B: ${x}`));
}, 1000);
