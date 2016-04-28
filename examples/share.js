'use strict';

const Rx = require('rxjs/Rx');

const source = Rx.Observable.interval(100).share();
const observerA = source.subscribe(x => console.log(`Observer A: ${x}`));

setTimeout(() => {
  const observerB = source.subscribe(x => console.log(`Observer B: ${x}`));
}, 1000);
