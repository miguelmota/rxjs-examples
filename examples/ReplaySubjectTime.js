var Rx = require('rx');

var subject = new Rx.ReplaySubject(null, 200);

setTimeout(() => subject.onNext(1), 100)
setTimeout(() => subject.onNext(2), 200)
setTimeout(() => subject.onNext(3), 300)

setTimeout(() => {
  subject.subscribe(n => {
    console.log(n);
  })

  subject.onNext(4);
}, 350);

// 2,3,4
