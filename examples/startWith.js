'use strict';

const Rx = require('rx');

Rx.Observable.fromArray([1,2,3])
.startWith('a','b','c')
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
