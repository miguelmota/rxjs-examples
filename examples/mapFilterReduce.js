'use strict';

const Rx = require('rx');

Rx.Observable.fromArray([1,2,3,4,5])
.map(x => x * 2)
.filter(x => x % 2 === 0)
.reduce((a, b) => a + b)
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
