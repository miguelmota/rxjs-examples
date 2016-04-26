'use strict';

const Rx = require('rxjs/Rx');

const subjectA = new Rx.Subject();

subjectA.next(-2);
subjectA.next(-1);
subjectA.next(0);
subjectA.subscribe(x => console.log(x),
                  error => console.error(error),
                  () => console.log('Subject done'))

subjectA.next(1);
subjectA.next(2);
subjectA.complete();

const subjectB = new Rx.ReplaySubject(2);

subjectB.next(-2);
subjectB.next(-1);
subjectB.next(0);

subjectB.subscribe(x => console.log(x),
                  error => console.error(error),
                  () => console.log('ReplaySubject Done'))

subjectB.next(1);
subjectB.next(2);
subjectB.complete();
