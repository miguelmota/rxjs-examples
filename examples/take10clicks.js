'use strict';

const Rx = require('rxjs/Rx');

Rx.Observable.fromEvent(document, 'click')
.filter(event => event.clientX > window.innerWidth / 2)
.take(10)
.subscribe(data => console.log(data.clientX, data.clientY),
           error => console.error(error),
           () => console.log('done'));
