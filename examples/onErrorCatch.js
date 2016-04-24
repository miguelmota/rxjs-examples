'use strict';

const Rx = require('rx');

const invalidJsonString = '{foo":"bar"}';

Rx.Observable.just(invalidJsonString)
.map(string => JSON.parse(string))
.catch(Rx.Observable.return({
  error: 'There was an error parsing JSON'
}))
.subscribe(result => console.log(result),
           error => console.error(`Error! ${error}`),
           () => console.log('done'))
