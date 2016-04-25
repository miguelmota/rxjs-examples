'use strict';

const Rx = require('rx');
require('rx-dom');

const source = Rx.DOM.ajax({
  url: window.location.href
});

source.subscribe(response => console.log(response),
                 error => console.error(error),
                 () => console.log('done'));
