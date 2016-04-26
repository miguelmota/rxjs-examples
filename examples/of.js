'use strict';

const Rx = require('rxjs/Rx');

Rx.Observable.of('foo')
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
