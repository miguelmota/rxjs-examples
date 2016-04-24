'use strict';

const Rx = require('rx');

Rx.Observable.fromArray([1,2,2,3,2,4])
.distinctUntilChanged()
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
