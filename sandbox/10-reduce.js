let people = [
    { id: 1, name: 'Vova', age: 21, budget: 100, isComlete: true },
    { id: 2, name: 'Sara', age: 30, budget: 400, isComlete: false },
    { id: 3, name: 'Mike', age: 45, budget: 500, isComlete: true },
]


// let totalBudget = people.reduce((total, person) => {
//     return total + person.budget
// }, 100)

// console.log(totalBudget)

// [].reduce((acc, element, index, arr) => { }, '') // '', {}, [], 234, true, false



// let numbers = [10, 20, 30, 40, 50];

// let result = numbers.reduce((acc, element, index, arr) => {
//     // console.log(element)
//     // console.log(index)
//     // console.log(arr)
//     return acc + element
// }, 0)


// console.log(result)



// let cart = [
//     { id: 1, title: 'Apple', price: 100, qty: 2 }, // 200
//     { id: 2, title: 'Samsung', price: 400, qty: 3 }, // 1200
//     { id: 3, title: 'LG', price: 500, qty: 5 }, // 1500
//     { id: 4, title: 'Sony', price: 500, qty: 2 }, // 1000
// ]

// // 4900

// let totalCart = cart.reduce((total, cartItem) => {
//     return total + cartItem.price * cartItem.qty
// }, 0)

// console.log(totalCart)


let cart = [
    { id: 1, title: 'Apple', price: 100, qty: 2 }, // 200
    { id: 2, title: 'Samsung', price: 400, qty: 3 }, // 1200
    { id: 3, title: 'LG', price: 500, qty: 5 }, // 1500
    { id: 4, title: 'Sony', price: 500, qty: 2 }, // 1000
]


// let brand = cart.reduce((brand, cartItem) => {
//     brand.push(cartItem.title)
//     return brand
// }, [])
// console.log(brand)


// let brandMap = cart.map((cartItem) => {
//     return cartItem.title
// })
// console.log(brandMap)


// 
let brandMap = cart.map(({ title, qty }) => {
    return {
        [title]: qty
    }
})
console.log(brandMap)



// let newCart = cart.reduce((acc, cartItem) => {
//     acc.push(cartItem)
//     return acc
// }, [])
// console.log(newCart === cart)