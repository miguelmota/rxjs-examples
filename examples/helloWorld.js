'use strict';

const Rx = require('rxjs/Rx');

Rx.Observable.of(`Hello World`)
.subscribe(x => console.log(x));
