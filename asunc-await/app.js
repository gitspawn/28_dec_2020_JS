// Fetch
// let url = 'https://jsonplaceholder.typicode.com/todos/1'
// fetch(url, {})
//   .then(res => res.json())
//   .then(data => console.log(data));


// Function promisification
let delay = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay)
    }, delay);
  })
}
delay(5000).then(data => console.log(data))


let url = 'https://jsonplaceholder.typicode.com/todos/1';

// function fetChData() {
//   console.log('Fetch started...')
//   delay(5000).then(data => console.log(data))
//     .then(() => fetch(url))
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }
// fetChData()



async function fetChDataAsync() {
  try {
    console.log('Fetch started...');
    await delay(2000);
    let response = await fetch(url);

    console.log(response)
    if (response.status === 200) {
      let data = await response.json();
      console.log(data)
    }

  } catch (err) {
    console.log(err)
  }
}
fetChDataAsync()




// try {

// } catch (error) {

// }


// let data = 'Vova';
// console.log('Before...')
// console.log(data)
// console.log(pizza)
// console.log('After...')
// console.log('After...')


// try {
//   let data = 'Vova';
//   console.log('Before...')
//   console.log(data)
//   console.log(pizza)
//   console.log('Try After...')
//   console.log('Try After...')
// } catch (error) {
//   console.log(error)
  // res.status({
  //   code: 400,

  // }).json({ title: 'Data base error' })
// }
// console.log('After...')
// console.log('After...')


