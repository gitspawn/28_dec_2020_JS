//  Rest / Spred
// ...
//   ... Rest =  ... Spred

// let citiesOfEurope = ['London', 'Paris', 'Milan'];
// let citiesofUkraine = ['Kyiv', 'Lviv', 'Odessa'];
// Spred
// let allCities = [...citiesOfEurope, ...citiesofUkraine];
// let allCities = ['London', 'Paris', 'Milan', 'Kyiv', 'Lviv', 'Odessa'];
// let allCities = ['samsung', ...citiesofUkraine, ...citiesOfEurope, 'apple', 'pear'];
// let allCities = citiesofUkraine.concat(citiesOfEurope)
// console.log(allCities === citiesOfEurope)


// let all = [...XVxgvxv, ...cxVVC]


// let feetback = {
//     good: 5,
//     bad: 50,
//     normal: 2
// }


// let phone = {

//     ...feetback,
//     // good: 5,
//     // bad: 50,
//     // normal: 2,
//     // bad: 0,
//     // normal: 0,
//     good: feetback.good + feetback.bad + feetback.normal,
//     apple: 'X10',
//     battery: 2000
// }

// console.log(phone)

// let cities = ['London', 'Paris', 'Milan', 'Kyiv', 'Lviv', 'Odessa'];
// Rest
// let [London, , Milan, ...pizza] = cities
//         0,  1,  2,     3-5
// console.log(London)
// console.log(Milan)
// console.log(pizza)
// console.log(Paris)
// console.log(Milan)


// function sum(a, b, ...pizza) {
//     // let srg = [...arguments]
//     let srg = arguments

//     console.log(Array.isArray(srg))
//     console.log(a, b, pizza)
// }

// sum(2, 3, 4, 56, 666, 'dfsdfsf')


let arr = [5, 10, 34, 345]

let result = Math.max(5, 10)
result = Math.min(5, 10, 34, 0, -3, 345)
result = Math.min(...arr)
console.log(result)