'use strict';

const Rx = require('rx');

const subject = new Rx.Subject();

const source = Rx.Observable.interval(100)
.map(x => `interval message ${x}`)
.take(3);

source.subscribe(subject);

subject.subscribe(x => console.log(x),
                  error => console.error(error),
                  () => console.log('done'));

subject.onNext(`message #1`)
subject.onNext(`message #2`)

setTimeout(() => subject.onCompleted(), 300);
