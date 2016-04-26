'use strict';

const Rx = require('rxjs/Rx');

const subject = new Rx.Subject();

const source = Rx.Observable.interval(100)
.map(x => `interval message ${x}`)
.take(5);

source.subscribe(subject);

subject.subscribe(x => console.log(x),
                  error => console.error(error),
                  () => console.log('done'));

subject.next(`message #1`)
subject.next(`message #2`)

setTimeout(() => subject.complete(), 300);
