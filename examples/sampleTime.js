'use strict';

const Rx = require('rxjs/Rx');

Rx.Observable.interval(100)
.sampleTime(200)
.take(10)
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
