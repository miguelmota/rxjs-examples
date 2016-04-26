'use strict';

const Rx = require('rxjs/Rx');

Rx.Observable.interval(100).take(10)
.flatMap(x => Promise.resolve(x))
.filter(x => x % 2 === 0)
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
