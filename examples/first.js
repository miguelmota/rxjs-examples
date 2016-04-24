'use strict';

const Rx = require('rx');

Rx.Observable.range(0, 10)
.filter(x => x % 2 === 0)
.first((x, index, observable) => x > 5)
.subscribe(x => console.log(x));
