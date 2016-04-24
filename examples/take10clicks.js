'use strict';

const Rx = require('rx');

Rx.Observable.fromEvent(document, 'click')
.filter(event => event.clientX > window.innerWidth / 2)
.take(10)
.subscribe(data => console.log(data.clientX, data.clientY))
