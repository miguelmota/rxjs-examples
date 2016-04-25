'use strict';

const Rx = require('rx');

const subject = new Rx.BehaviorSubject('foo');

subject.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));

subject.onNext('bar');
subject.onCompleted();
