import people from './people.js'
console.table(people)
// [].filter((element, index, arr) => { })


// { id: 1, name: 'Vova', age: 21, budget: 4000, isComlete: true },
// { id: 2, name: 'Sara', age: 30, budget: 3400, : false },
// { id: 3, name: 'Mike', age: 45, budget: 1500, isComlete: true },
// { id: 4, name: 'Bob', age: 18, budget: 400, isComlete: false }




// let adults = people.filter((person) => {
//     return person.age > 21;
//     // return person.age > 50; // []
// });
// console.log(adults);

let allTaxes = people.filter((person) => {
    // return person.isComlete === true
    return !person.isComlete
})


console.table(allTaxes)
