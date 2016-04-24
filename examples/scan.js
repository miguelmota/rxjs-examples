'use strict';

const Rx = require('rx');

Rx.Observable.interval(500)
.scan((previous, current) => {
  return {
    sum: previous.sum + current,
    count: previous.count + 1
  }
}, {sum: 0, count: 0})
.map(o => o.sum / o.count)
.subscribe(x => console.log(x));
