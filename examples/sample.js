'use strict';

const Rx = require('rx');

Rx.Observable.interval(100)
.sample(200)
.take(10)
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
