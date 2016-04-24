'use strict';

const Rx = require('rx');

Rx.Observable.range(0, 100)
.takeWhile(x => x < 5)
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
