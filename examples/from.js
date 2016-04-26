'use strict';

const Rx = require('rxjs/Rx');

const set = new Set([1, 2, 3])
Rx.Observable.from(set)
.map(x => x * 2)
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
