'use strict';

const Rx = require('rx');

Rx.Observable.just(`Hello World`)
.subscribe(x => console.log(x));
