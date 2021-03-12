// let fetchUser = (userName) => {
//   let success = Math.random() > 0.5;
//   let user = { name: 'Vova', age: 23 };
//   let err = 'Произошла ошибка...'


//   // console.log(success)
//   // return user
//   return success ? user : err;
// }

// console.log(fetchUser("Sara"));


// Callbacks ========
// let fetchUser = (userName, onSucces, onError) => {
//   setTimeout(() => {
//     let success = Math.random() > 0.3;
//     if (success) {
//       let user = { name: 'Vova', age: 23 };
//       onSucces(user);
//       return;
//     }

//     let err = 'Произошла ошибка...'
//     onError(err)
//   }, 1000);
// }

// function onSucces(user) {
//   console.log(user)
// }

// function onError(err) {
//   console.log(err)
// }

// fetchUser('Vova', onSucces, onError)


// Promises
// let fetchUser = (userName) => {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = Math.random() > 0.3;
//       if (success) {
//         let user = { name: 'Vova', age: 23 };
//         resolve(user);
//         return;
//       }

//       let err = 'Произошла ошибка...'
//       reject(err)
//     }, 1000);
//   })

//   return promise
// }


// fetchUser('Vova')
//   .then(Succes)
//   .catch(Error)


// function Succes(user) {
//   console.log(user)
// }

// function Error(err) {
//   console.log(err)
// }


// let makePromise = (delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(delay)
//     }, delay);
//   })
// }


// makePromise(3000).then(data => console.log(data))


// Chaining
// promise
//   .then()
//   .then()
//   .then()
//   .then()
//   .then()
//   .then()
//   .catch()
//   .finaly()

let promise = new Promise((resolve, reject) => {
  resolve(100)
})

// console.log(promise)

// promise.then(res => {
//   console.log(res)
//   return res * 2
// }).then(a => {
//   console.log(a)
//   return a * 2
// }).then(b => {
//   console.log(b)
//   return b * 2

// }).then(c => {
//   console.log(c)
//   return ['1', 2, 3]
// }).then(data => console.log(data))