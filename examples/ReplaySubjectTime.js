'use strict';

const Rx = require('rx');

const subject = new Rx.ReplaySubject(null, 200);

setTimeout(() => subject.onNext(1), 100)
setTimeout(() => subject.onNext(2), 200)
setTimeout(() => subject.onNext(3), 300)

setTimeout(() => {
  subject.subscribe(x => console.log(x),
                    error => console.error(error),
                    () => console.log('done'))

  subject.onNext(4);
  subject.onCompleted();
}, 350);
