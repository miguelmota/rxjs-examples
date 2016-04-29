'use strict';

const Rx = require('rxjs/Rx');

const array = [];

for (let i = 0; i < 1e4; i++) {
  array.push(i);
}

const timeStart = Date.now();
const source = Rx.Observable.from(array);

console.log(`before subscribe`);
source.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log(`Total time: ${Date.now() - timeStart}ms`));
console.log(`after subscribe`);
