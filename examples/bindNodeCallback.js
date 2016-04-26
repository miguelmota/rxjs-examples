'use strict';

const Rx = require('rxjs/Rx');
const fs = require('fs');

const readdir = Rx.Observable.bindNodeCallback(fs.readdir);
const source = readdir('./');

source.subscribe(result => console.log(result),
                error => console.error(error),
                () => console.log('done'));
