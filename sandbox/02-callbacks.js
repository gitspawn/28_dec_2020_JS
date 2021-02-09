// Callbac function

// const printMessage = function (message) {
//     console.log(message)
// }


//  callback - this is a function
// const highOrderFunction = function (printMessage, name) {
//     const stirng = 'HighOrderFunction is cool' + " " + name;
//     printMessage(stirng);
// }


// highOrderFunction(printMessage, 'Vova') 


// Calculator

let sum = (a, b) => a + b;
let sub = (a, b) => a - b
let mult = (a, b) => a * b
let div = (a, b) => a / b


function calc(a, b, callback) {
    return callback(a, b)
}

let result = calc(20, 10, mult);
result = calc(100, 4, div);
result = calc(100, 20, (a, b) => a + b);


console.log(result)