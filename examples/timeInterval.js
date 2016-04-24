'use strict';

const Rx = require('rx');

Rx.Observable.interval(100)
.timeInterval()
.take(10)
.subscribe(x => console.log(`${x.value} ${x.interval}`),
           error => console.error(error),
           () => console.log('done'))
