'use strict';

const Rx = require('rxjs/Rx');

let array = [];
for (var i = 0; i < 1e5; i++) {
  array.push(i);
}

const expensiveOperation = (x) => {
    let k = 1e7;
    while(k--);
    return x;
};

const source = Rx.Observable.from(array)
.groupBy(value => value % 2 === 0)
.map(value => value.observeOn(Rx.Scheduler.asap))
.map(groupedObservable => expensiveOperation(groupedObservable))

console.log(`before subscribe`);
source.subscribe(obs => obs.count().subscribe(x => console.log(x)),
error => console.error(error),
() => console.log(`done`));
console.log(`after subscribe`);
