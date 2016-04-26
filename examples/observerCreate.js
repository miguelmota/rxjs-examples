'use strict';

const Rx = require('rxjs/Rx');

const source = Rx.Observable.create(observer => {
  observer.next(`Hello`);
  observer.next(`World`);
  observer.complete();

  return () => console.log(`disposed`);
});

const observer = {
  next: x => console.log(x),
  error: error => console.error(error),
  complete: () => console.log(`done`)
};

const subscription = source.subscribe(observer);
