'use strict';

const Rx = require('rxjs/Rx.KitchenSink');
const RxDOM = require('rxjs/Rx.DOM');

const source = Rx.Observable.ajax({
  url: window.location.href,
  responseType: 'text/html'
});

source.subscribe(xhr => console.log(xhr),
                 error => console.error(error),
                 () => console.log('done'));
