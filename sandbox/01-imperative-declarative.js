// Imperative

// let numbers = [1, 2, 3, 4, 5];
// let filteredNumbers = []; // > 3

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > 3) {
//         filteredNumbers.push(numbers[i])
//     }
// }
// console.log(filteredNumbers)



// Declarative
let numbers = [1, 2, 3, 4, 5];
let filteredNumbers = numbers.filter((value) => {
    return value > 3
})
console.log(filteredNumbers)