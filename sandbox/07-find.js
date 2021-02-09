import people from './people.js'
console.table(people)
// [].find((element, index, arr) => { })


// { id: 1, name: 'Vova', age: 21, budget: 4000, isComlete: true },
// { id: 2, name: 'Sara', age: 30, budget: 3400, : false },
// { id: 3, name: 'Mike', age: 45, budget: 1500, isComlete: true },
// { id: 4, name: 'Bob', age: 18, budget: 400, isComlete: false }


// let findedPerson = people.find((person) => {
//     // return person.name === 'Mike'
//     return person.name === 'Sveta'
// })

// console.table(findedPerson)


let numbers = [10, 20, 30, 40, 50];

// let num = numbers.find((n) => {
//     return n > 20
// })

let num = numbers.filter((n) => {
    return n > 20
})

console.table(num)