'use strict';

const Rx = require('rxjs/Rx');

const invalidJsonString = '{foo":"bar"}';

Rx.Observable.of(invalidJsonString)
.map(string => JSON.parse(string))
.catch((error) => Rx.Observable.of({
  error: `There was an error parsing JSON`
}))
.subscribe(result => console.log(result),
           error => console.error(`Error! ${error}`),
           () => console.log(`done`))
