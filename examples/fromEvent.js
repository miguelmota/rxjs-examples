'use strict';

const Rx = require('rxjs/Rx');

Rx.Observable.fromEvent(document, 'mousemove')
.subscribe(event => console.log(event.clientX, event.clientY));
