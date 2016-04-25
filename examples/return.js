'use strict';

var Rx = require('rx');

Rx.Observable.return(`Hello World`)
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
