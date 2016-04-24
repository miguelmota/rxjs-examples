'use strict';

const Rx = require('rx');

const source = Rx.Observable.create(observer => {
  observer.onNext(`Hello`);
  observer.onNext(`World`);
  observer.onCompleted();

  return Rx.Disposable.create(() => console.log('disposed'));
});

const subscription = source.subscribe(
                        x => console.log(x),
                        error => console.error(error),
                        () => console.log('done'));

subscription.dispose();
