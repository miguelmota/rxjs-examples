'use strict';

const Rx = require('rx');
const fs = require('fs');

const readdir = Rx.Observable.fromNodeCallback(fs.readdir);
const source = readdir('./');

source.subscribe(result => console.log(result),
                error => console.error(error),
                () => console.log('done'));
