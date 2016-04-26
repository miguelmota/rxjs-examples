'use strict';

const Rx = require('rxjs/Rx');

Rx.Observable.interval(500)
.scan((previous, current) => {
  return {
    sum: previous.sum + current,
    count: previous.count + 1
  }
}, {sum: 0, count: 0})
.map(o => o.sum / o.count)
.take(10)
.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));
