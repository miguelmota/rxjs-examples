'use strict';

const Rx = require('rxjs/Rx');

Rx.Observable.range(0, 3)
.map(x => Rx.Observable.range(x, 3))
.concatAll()
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
