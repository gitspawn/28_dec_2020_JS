// [].sort(callback)

// let fruits = ['bananes', 'potatos', 'melon', 'apples', 'kiwi'];

// console.table(fruits)


// console.table(fruits.sort())


// let letters = ['c', 'a', 'b', 'A', 'C', 'B'];
// console.table(letters);

// console.table(letters.sort());

// console.log('a'.charCodeAt())
// console.log('A'.charCodeAt())

// console.log('b'.charCodeAt())
// console.log('B'.charCodeAt())



let numbers = [10, 1, 11, 20, 30, 22, 40, 4, 5, 50];

// console.log(numbers.sort())
let sortNumbers = numbers.sort((a, b) => {
    // return a - b
    return b - a
})
console.log(sortNumbers)