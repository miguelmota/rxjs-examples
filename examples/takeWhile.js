'use strict';

const Rx = require('rxjs/Rx');

Rx.Observable.range(0, 100)
.takeWhile(x => x < 5)
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
