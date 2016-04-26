'use strict';

const Rx = require('rxjs/Rx');

const subject = new Rx.ReplaySubject(10, 200);

setTimeout(() => subject.next(1), 100)
setTimeout(() => subject.next(2), 200)
setTimeout(() => subject.next(3), 300)

setTimeout(() => {
  subject.subscribe(x => console.log(x),
                    error => console.error(error),
                    () => console.log('done'))

  subject.next(4);
  subject.complete();
}, 350);
