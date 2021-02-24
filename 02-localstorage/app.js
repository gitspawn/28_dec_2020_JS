// LocalStorage

// { name: 'Vova', age: 30}

// window.localStorage.setItem()

// Add to storage
// localStorage.setItem()

// // Get from storage
// localStorage.getItem()

// // Remove from storage
// localStorage.removeItem()


// // Clear storage
// localStorage.clear()

// localStorage.setItem('user', 'hello world')
// localStorage.setItem('cart', 'samsung')

// Add fo storage
let user = { name: 'Sara', age: 30 }
localStorage.setItem('user', JSON.stringify(user))
localStorage.setItem('product', JSON.stringify({ id: 1, title: "Apple" }))


// Get from storage
let userFromLocalstorage = localStorage.getItem('user')
console.log(typeof userFromLocalstorage)
console.log(userFromLocalstorage)

let userParsed = JSON.parse(userFromLocalstorage)

console.log(userParsed)
console.log(typeof userParsed)

let pizza = localStorage.getItem('pizza')
console.log("pizza", pizza)

// Remove from storage
// localStorage.removeItem('product')


//  Clear storage
// localStorage.clear()