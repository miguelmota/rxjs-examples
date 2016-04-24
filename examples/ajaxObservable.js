'use strict';

const Rx = require('rx');

function get(url) {
  return Rx.Observable.create(observer => {
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = () => {
      if (req.status === 200) {
        observer.onNext(req.response);
        observer.onCompleted();
      } else {
        observer.onError(new Error(req.statusText));
      }
    }

    req.onerror = () => {
      observer.onError(new Error('An error occured'));
    };

    req.send();
  });
}

const source = get(window.location.href);

source.subscribe(response => console.log(response),
                 error => console.error(error),
                  () => console.log('done'));


