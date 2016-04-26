'use strict';

const Rx = require('rxjs/Rx');
const RxDOM = require('rxjs/Rx.DOM');

const getData = (url) => {
  let subject;

  return Rx.Observable.create(observer => {
    if (!subject) {
      subject = new Rx.AsyncSubject();

      RxDOM.Observable.ajax({
        url,
        responseType: 'text/html'
      })
      .subscribe(subject);

      return subject
      .map((xhr, b, c) => {
        console.log(xhr, b,c)
          return xhr.response
    })
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
