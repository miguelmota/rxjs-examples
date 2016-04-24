'use strict';

const Rx = require('rx');

const mouseMoves = Rx.Observable.fromEvent(document, `mousemove`)

const movesOnRight = mouseMoves.filter(event => event.clientX > window.innerWidth / 2);
const movesOnLeft = mouseMoves.filter(event => event.clientX > window.innerWidth / 2);

movesOnRight.subscribe(event => console.log(`Right side`, event.clientX, event.clientY));
movesOnLeft.subscribe(event => console.log(`Left side`, event.clientX, event.clientY));
