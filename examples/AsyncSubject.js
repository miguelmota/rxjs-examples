'use strict';

const Rx = require('rx');

const delayedRange = Rx.Observable.range(0, 5).delay(100);
const subject = new Rx.AsyncSubject();

delayedRange.subscribe(subject);
subject.subscribe(x => console.log(x),
                  error => console.error(error),
                  () => console.log('done'))

