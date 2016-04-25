'use strict';

const Rx = require('rx');

const subject = new Rx.Subject();

subject.subscribe(x => console.log(x),
                  error => console.error(error),
                  () => console.log('done'))

console.log(subject.hasObservers());
subject.onNext('a');
subject.onNext('b');
subject.onNext('c');
subject.onCompleted();
console.log(subject.hasObservers());
