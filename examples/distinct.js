'use strict';

const Rx = require('rxjs/Rx.KitchenSink');

Rx.Observable.from([1,2,2,3])
.distinct()
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
