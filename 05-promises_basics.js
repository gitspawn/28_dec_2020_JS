// let promise = new Promise((resolve, reject) => {
//   // resolve('hello')
//   resolve(34)
//   // resolve([1, 2, 3, 4])
//   // resolve({ name: 'vova', age: 20 })

//   // reject('error')
// })

// console.log(promise)


// let promise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.5
//   setTimeout(() => {
//     // resolve('Success')
//     // resolve([1, 2, 3, 4])
//     // resolve({ name: 'vova', age: 20 })
//     if (success) {
//       // resolve('Success')
//       resolve([1, 2, 3, 4])
//     }
//     reject('Error!')
//   }, 2000);
// })


// console.log('Before')
// let data = '';

// promise
//   .then(result => {
//     data = result
//     console.log('Внутри промиса', data)
//     // console.log(result)
//   })
//   .catch(err => console.log(err))

// console.log('За промисом', data)
// console.log('After')

// promise.then(
//   result => console.log(result) ,
//   error => console.log(error)
// )


// promise.then(
//   onRelolve,
//   onReject
// )

// function onRelolve(result) {
//   console.log(result)
// }

// function onReject(err) {
//   console.log(err)
// }



let promise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5
  setTimeout(() => {
    // resolve('Success')
    // resolve([1, 2, 3, 4])
    // resolve({ name: 'vova', age: 20 })
    if (success) {
      // resolve('Success')
      resolve([1, 2, 3, 4])
    }
    reject('Error!')
  }, 2000);
})

console.log(promise)

spinner.classlist.add('visible')

promise
  .then(result => {
    console.log(resiult)
  })
  .catch(err => {
    console.log(err)
  }).finaly(() => {
    spinner.classlist.remove('visible')
  })
