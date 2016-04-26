'use strict';

const Rx = require('rxjs/Rx.KitchenSink');

Rx.Observable.interval(100)
.timeInterval()
.take(10)
.subscribe(x => console.log(`${x.value} ${x.interval}`),
           error => console.error(error),
           () => console.log('done'))
