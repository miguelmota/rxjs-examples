'use strict';

const Rx = require('rxjs/Rx');
const RxDOM = require('rxjs/Rx.DOM');

RxDOM.Observable.ajax({
  method: 'GET',
  url: window.location.href,
  responseType: 'text/html'
})
.retry(5)
.subscribe(xhr => console.log(xhr.response),
           error => console.error(error),
           () => console.log('done'));
