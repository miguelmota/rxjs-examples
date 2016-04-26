'use strict';

const Rx = require('rxjs/Rx');

const sourceA = Rx.Observable.interval(100)
.map(x => `First: ${x}`)

const sourceB = Rx.Observable.interval(150)
.map(x => `Second: ${x}`)

const sourceC = Rx.Observable.combineLatest(sourceA, sourceB).take(8);

sourceC.subscribe(x => console.log(x),
                  error => console.error(error),
                  () => console.log('done'));

