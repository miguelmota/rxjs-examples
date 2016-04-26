'use strict';

const Rx = require('rxjs/Rx');

const subject = new Rx.BehaviorSubject('foo');

subject.subscribe(x => console.log(x),
           error => console.error(error),
           () => console.log('done'));

subject.next('bar');
subject.complete();
