'use strict';

const Rx = require('rxjs/Rx');

Rx.Observable.from([1,2,2,3,2,4])
.distinctUntilChanged()
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
