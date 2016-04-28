'use strict';

const Rx = require('rxjs/Rx');

const source = Rx.Observable.interval(100);
const observerA = source.subscribe(x => console.log(`ObserverA: ${x}`));

setTimeout(() => {
  const observerB = source.subscribe(x => console.log(`ObserverB: ${x}`));
}, 1000);
