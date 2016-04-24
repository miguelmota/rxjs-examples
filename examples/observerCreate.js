'use strict';

const Rx = require('rx');

const source = Rx.Observable.create(observer => {
  observer.onNext(`Hello`);
  observer.onNext(`World`);
  observer.onCompleted();

  return Rx.Disposable.create(() => console.log('disposed'));
});

const observer = Rx.Observer.create(
                  x => console.log(x),
                  error => console.error(error),
                  () => console.log('done'))

const subscription = source.subscribe(observer);
