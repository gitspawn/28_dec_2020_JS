import people from './people.js'
console.table(people)
// [].map((element, index, arr) => { })


// { id: 1, name: 'Vova', age: 22, budget: 4000, isComlete: true },
// { id: 2, name: 'Sara', age: 30, budget: 3400, : false },
// { id: 3, name: 'Mike', age: 45, budget: 1500, isComlete: true },
// { id: 4, name: 'Bob', age: 18, budget: 400, isComlete: false }

isComlete
// let names = people.map((person) => {
//     return person.name.toUpperCase();
// });

// console.log(names)

// let newBudget = people.map((elem) => {
//     // return elem.budget + 5
//     return elem.age * 3
// })

// console.log(newBudget)


let updateUser = 'Sara';

let updateUsers = people.map((person) => {
    if (person.name === updateUser) {
        // return ('Haшли нужного!')
        return {
            ...person,
            budget: person.budget + 1000,
            isComlete: true
        }
    }

    return person

    // { id: 1, name: 'Vova', age: 22, budget: 4000, isComlete: true },
    // { id: 2, name: 'Sara', age: 30, budget: 4400, : true  },
    // { id: 3, name: 'Mike', age: 45, budget: 1500, isComlete: true },

})

console.table(updateUsers)




// let cart = [
//     { id: 1, title: 'Apple', price: 100, qty: 2 }, // 200
//     { id: 2, title: 'Samsung', price: 400, qty: 3 }, // 1200
//     { id: 3, title: 'LG', price: 500, qty: 5 }, // 1500
//     { id: 4, title: 'Sony', price: 500, qty: 2 }, // 1000
// ]


// let brandMap = cart.map(({ title, qty }) => {
//     return {
//         [title]: qty
//     }
// })
// console.log(brandMap)
