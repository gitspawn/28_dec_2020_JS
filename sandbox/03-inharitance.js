// Object.create

// const protoObj = {
//     // firstName: 'Vova',
//     // age: 30,
//     sayHello() { return 'Hello world' }
// }

// Object.create(prototype, Property_descriptor)

// const obj = Object.create(protoObj, {
//     firstName: {
//         value: 'Vova',
//     },
//     age: {
//         value: 30
//     }
// })

// console.log(obj)


function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
User.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}
User.prototype.sayHello = function () {
    return `Hello ${this.firstName} ${this.lastName}`;
}

let vova = new User('Vova', 'Smith')
// console.log(vova)

// ==================================================================

// Functional inheritance
function Customer(firstName, lastName, memberShip, status) {
    // User.call(this, firstName, lastName);
    // this.memberShip = memberShip

    User.apply(this, arguments)
    this.memberShip = memberShip
    this.status = status
}
// Functional inheritance


// Prototype inheritance
// Object.create(prototype, Property_descriptor)
Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer
// Prototype inheritance

Customer.prototype.getMembership = function () {
    return this.memberShip.toUpperCase()
}
Customer.prototype.getFullName = function () {
    console.log('Hello pizza')
}

let sara = new Customer('Sara', 'Johns', 'Basic+');
console.log(sara)
// console.log(sara.getFullName())
// console.log(sara.firstName)
// console.log(sara.getMembership())
// sara.getFullName()
