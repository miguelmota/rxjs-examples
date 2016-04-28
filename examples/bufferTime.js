'use strict';

const Rx = require('rxjs/Rx');

Rx.Observable.interval(100)
.bufferTime(300)
.subscribe(result => console.log(result),
           error => console.error(error),
           () => console.log('done'));
