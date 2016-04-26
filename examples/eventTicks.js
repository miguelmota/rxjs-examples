'use strict';

const Rx = require('rxjs/Rx');

const updateCount = (acc, i) => i % 2 === 0 ? acc + 1 : acc;
const ticksObservable = Rx.Observable.interval(100)
.scan(updateCount)

ticksObservable.subscribe(eventTicks => console.log(`SubscriberA: ${eventTicks}`))
ticksObservable.subscribe(eventTicks => console.log(`SubscriberB: ${eventTicks}`))
