// Sync code
// console.log('First')
// console.log('Second')
// console.log('Third')
// function sum(a, b) {
//   return a + b
// }
// console.log(sum(10, 20))
// console.log('Fifs')


// Async code
// setTimeout()
// clearTimeout()
// setInterval();
// clearInterval()

// let log = (time, msg) => { console.log(`Timeout: ${time}, ${msg}`) }

let log = () => { console.log(`Timeout`) }

console.log('Befor call Timeout')
// setTimeout(() => { }, 0);
// setTimeout(log, 2000, 3000, 'hello',);
// setTimeout(log, 7000);
// setTimeout(log, 5000);
// let timerId20 = setTimeout(log, 2000);
// let timerId30 = setTimeout(log, 2000);

// console.log(timerId20)
// console.log(timerId30)

// let timerId = setTimeout(log, 2000);
// console.log(timerId)
// clearTimeout(timerId)

// console.log('After call Timeout')



let logger = (time) => { console.log(`Лог после ${time}ms`) }

let timerId = setTimeout(logger, 2000, 2000);

const canselTimer = Math.random() > 0.3;
console.log("canselTimer", canselTimer)

if (!canselTimer) {
  clearTimeout(timerId)
}