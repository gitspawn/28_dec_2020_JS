let btn = document.querySelector('button')
console.log(btn)

// btn.addEventListener('click', (e) => {
//   console.log(e)
// })

btn.addEventListener('click', console.log)



fetch('https://jsonplaceholder.typicode.com/todos')
.then(res=>res.json())
// .then((data) => console.log(data))
.then(console.log)