

// Async code

// setInterval();
// clearInterval()

// setInterval(() => {
//   console.log('Hello')
// }, 1000);

let couter = 0;
let hasBuy = false;

let intervalId = setInterval(() => {
  if (couter === 3 || hasBuy) {
    console.log('Останови счетчик');
    clearInterval(intervalId);
    return;
  }

  // if (couter === 2) {
  //   console.log('Останови счетчик');
  //   clearInterval(intervalId);
  //   return
  // }

  console.log('Купи товар!!!');
  couter += 1
}, 2000);