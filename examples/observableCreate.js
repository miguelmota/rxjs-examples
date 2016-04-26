'use strict';

const Rx = require('rxjs/Rx');

const source = Rx.Observable.create(observer => {
  observer.next(`Hello`);
  observer.next(`World`);
  observer.complete();

  return () => console.log(`disposed`);
});

const subscription = source.subscribe(
                        x => console.log(x),
                        error => console.error(error),
                        () => console.log(`done`));

subscription.unsubscribe();
