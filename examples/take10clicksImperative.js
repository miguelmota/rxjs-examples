'use strict';

let clicks = 0;

document.addEventListener('click', function clickHandler(event) {
  if (clicks < 10) {
    if (event.clientX > window.innerWidth / 2) {
      console.log(event.clientX, event.clientY);
      clicks += 1;
    }
  } else {
    document.removeEventListener('click', clickHandler);
  }
});
