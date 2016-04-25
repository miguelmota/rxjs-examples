'use strict';

const Rx = require('rx');

const subjectA = new Rx.Subject();

subjectA.onNext(-2);
subjectA.onNext(-1);
subjectA.onNext(1);
subjectA.subscribe(x => console.log(x),
                  error => console.error(error),
                  () => console.log('Subject done'))

subjectA.onNext(2);
subjectA.onNext(3);
subjectA.onCompleted();

const subjectB = new Rx.ReplaySubject(2);

subjectB.onNext(-2);
subjectB.onNext(-1);
subjectB.onNext(1);

subjectB.subscribe(x => console.log(x),
                  error => console.error(error),
                  () => console.log('ReplaySubject Done'))

subjectB.onNext(2);
subjectB.onNext(3);
subjectB.onCompleted();
