'use strict';

const Rx = require('rx');

Rx.Observable.range(0, 3)
.map(x => Rx.Observable.range(x, 3))
.concatAll()
.subscribe(x => console.log(x));
