'use strict';

const Rx = require('rx');

const invalidJsonString = '{foo":"bar"}';

Rx.Observable.just(invalidJsonString)
.map(string => JSON.parse(string))
.subscribe(result => console.log(result),
           error => console.error(`Error! ${error}`),
           () => console.log('done'))
