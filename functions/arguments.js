
// let sayHello = function (msg = 'test', name = 30) {
//     console.log(`${msg} ${name}`);
// }


// // Array like object
// function sayHello(msg, name) {

//     // // let arr = Array.from(arguments)
//     // let arr = [...arguments]

//     // console.log(arguments[0])
//     // console.log(`${msg} ${name}`);
//     let total = 0;
//     for (let arrg of arguments) {
//         total += 1
//     }

//     return total
// }


// let displayData = sayHello('Hello', 'SARA', 30, [1, 2]);

// console.log(displayData)


// let getDemo = function () {
//     console.log(arguments)
// }

let getDemo = () => {
    console.log(arguments)
}


getDemo('fsd')