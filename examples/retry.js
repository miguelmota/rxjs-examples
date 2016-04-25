'use strict';

const Rx = require('rx');
require('rx-dom');

Rx.DOM.get(window.location.href)
.retry(5)
.subscribe(xhr => console.log(xhr.response),
           error => console.error(error),
           () => console.log('done'));
