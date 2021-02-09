// Не важно где обьявили, важно где вызвали.
// this - кто вызвал функцию. Контекст вызова ф-ции.

// Явное указание контеста
// Call - принимает аргументы, возвращает и вызывает ф-цию
// Apply - принимает массив, возвращает и вызывает ф-цию
// Bind  - принимает аргументы, возвращает ф-цию, связывает навсегда





// function sayHello() {
//     console.log(this)
//     console.log('Hello world');
// }

// sayHello();
// this.sayHello();



// let user = {
//     name: 'Vova',
//     showThis() {
//         console.log(this)
//     }
// }

// user.showThis()


// let hotel = {
//     name: 'Hilton',
//     showThis() {
//         let fn = () => {
//             console.log('this in fn', this);
//         }

//         fn();
//         console.log('this in showThis', this)
//     }
// }

// hotel.showThis()



// const greet = function () {
//     return `Wellcome to ${this.name} hotel`;
// }

// let hotel = {
//     name: 'Arizona Inn'
// }

// Call, apply, bind
// let result = greet.call(hotel)
// result = greet.apply(hotel)
// result = greet.bind(hotel)()
// console.log(result)

// console.log(greet.bind(hotel)());





// let vova = {
//     name: 'Vova',
//     sayHello() {
//         console.log(`Hello ${this.name}`)
//     }
// }

// let sara = {
//     name: 'Sara'
// }

// vova.sayHello.bind(sara)();

// let arr = [2, 4, 10, 0, -5, 100];

// let result = Math.min(-4, 10)
// result = Math.min.call(Math, ...arr)
// result = Math.min.call(Math, 2, 40)
// result = Math.min.apply(Math, arr)
// result = Math.max.bind(Math, ...arr)()
// console.log(result)



// let btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     console.log(this)
// })



// let vova = {
//     name: 'Vova',
//     sayHello() {
//         console.log(`Hello ${this.name}`)
//     }
// }


// let btn = document.querySelector('button');
// btn.addEventListener('click', vova.sayHello.bind(vova))



