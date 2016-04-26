'use strict';

const Rx = require('rxjs/Rx');

Rx.Observable.range(0, 10)
.filter(x => x % 2 === 0)
.first((x, index, observable) => x > 5)
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
