'use strict';

const Rx = require('rx');

Rx.Observable.fromEvent(document, 'mousemove')
.subscribe(event => console.log(event.clientX, event.clientY));
