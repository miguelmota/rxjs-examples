'use strict';

const Rx = require('rx');
require('rx-dom');

const getData = (url) => {
  let subject;

  return Rx.Observable.create(observer => {
    if (!subject) {
      subject = new Rx.AsyncSubject();

      Rx.DOM.get(url)
      .subscribe(subject);

      return subject
      .map(xhr => xhr.response)
      .subscribe(observer);
    }

    return subject
    .map(xhr => `cached ${xhr.response}`)
    .subscribe(observer);
  });
};

const source = getData(window.location.href);

source.subscribe(x => console.log(x),
                 error => console.error(error),
                 () => console.log('done'));

setTimeout(() => {
  source.subscribe(x => console.log(x),
                   error => console.error(error),
                   () => console.log('done'))
}, 100);
