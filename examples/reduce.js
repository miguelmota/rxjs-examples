'use strict';

const Rx = require('rxjs/Rx');

Rx.Observable.from([1,2,3,4,5])
.reduce((acc, x) => acc * x)
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
