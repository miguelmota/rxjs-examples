'use strict';

const Rx = require('rxjs/Rx');

function get(url) {
  return Rx.Observable.create(observer => {
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = () => {
      if (req.status === 200) {
        observer.next(req.response);
        observer.complete();
      } else {
        observer.error(new Error(req.statusText));
      }
    }

    req.onerror = () => {
      observer.error(new Error('An error occured'));
    };

    req.send();
  });
}

const source = get(window.location.href);

source.subscribe(response => console.log(response),
                 error => console.error(error),
                  () => console.log('done'));


