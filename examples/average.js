'use strict';

const Rx = require('rx');

Rx.Observable.range(0, 9)
.average()
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
