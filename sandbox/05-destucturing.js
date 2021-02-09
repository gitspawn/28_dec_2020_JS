// Destucturing

// let person = {
//     name: 'Bob',
//     age: 30,
//     city: 'New York',
//     country: 'USA',
// }


// const { age, city, country, name } = person;


// function getInfo({ age, city = 'Boston', country, name }) {

// let { age, city, country, name } = user

// console.log(name)
// console.log(age)
// console.log(city)
// console.log(country)
// }

// function getCart({ id, title = 'Product', qty = 0 }) {
//     console.log(id)
//     console.log(title)
//     console.log(qty)
// }

// getCart({
//     id: 23424,
//     // title: 'Samsung',
// })

// getInfo({
//     name: 'Bob',
//     age: 30,
//     country: 'USA',
// })
// console.log(city)
// console.log(country)
// console.log(age)
// console.log(name)

// console.log(person.city)
// console.log(person.country)
// console.log(person.age)
// console.log(person.name)

// person.name;
// person.city;



// let car = {
//     speed: 60,
//     maxSpeed: 200,
//     power: [150, 200, 300,],
//     carData: {
//         vin: 123124323,
//         yaer: 2020,
//         city: 'Berlin',
//         tyres: {
//             radius: 17,
//             season: 'winter'
//         }
//     },

//     getSpecs() {
//         console.log('Car')
//     }
// }


// let { radius, season } = car.carData.tyres

// // radius: 17,
// if (radius == 17 && season == 'winter') {
//     console.log('Titanium')
// } else if (car.carData.tyres.radius == 18) {
//     console.log('Aluminum')
// } else {
//     console.log('Stock')
// }



// Arr Destuctiring
// let people = ['John', 'Sara', 'Mike', 'Bob'];

// const [person_1, person_2, ...rest] = people
// console.log(person_1)
// console.log(person_2)
// console.log(rest)

// let a = 10;
// let b = 'Vova';
// // [a, b] = ['Vova', 10]
// // [a, b] = [b, a]
// console.log(a)
// console.log(b)



let person = {
    name: 'Bob',
    age: 30,
    city: 'New York',
    country: 'USA',
}

let { city, country: pizza } = person
// console.log(city)
console.log(pizza)
// console.log(age)
// console.log(name)


// let user = { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" }

// let { name, username: nickName } = user

// console.log(user.username)
// console.log(nickName)


// let user = {
//     name: "Leanne Graham",
//     email: "Sincere@april.biz"
// }


// user['password'] = 1234

// function loginHandler(name, value) {
//     return {
//         [name]: value
//     }
// }

// let Lennie = loginHandler('Leanne Graham', 'Sincere@april.biz')

// console.log(Lennie)