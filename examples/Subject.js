'use strict';

const Rx = require('rxjs/Rx');

const subject = new Rx.Subject();

subject.subscribe(x => console.log(x),
                  error => console.error(error),
                  () => console.log('done'))

subject.next('a');
subject.next('b');
subject.complete();
