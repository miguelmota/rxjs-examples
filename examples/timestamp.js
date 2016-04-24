'use strict';

const Rx = require('rx');

Rx.Observable.interval(100)
.timestamp()
.take(10)
.subscribe(x => console.log(`${x.value} ${x.timestamp}`),
           error => console.error(error),
           () => console.log('done'))
