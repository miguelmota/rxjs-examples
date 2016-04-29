'use strict';

const Rx = require('rxjs/Rx');

const timeStart = Date.now();
const source = Rx.Observable.range(1, 5)
.do(value => console.log(`processing value ${value}`))
.observeOn(Rx.Scheduler.async)

console.log('before subscribe');
source.subscribe(x => console.log(`next ${x}`),
                 error => console.error(error),
                 () => console.log(`Total time: ${Date.now() - timeStart}ms`));
console.log(`after subscribe`);
