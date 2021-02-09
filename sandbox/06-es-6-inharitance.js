// ES6 inharitance
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }


    sayHello() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

let vova = new User('Vova', 'Smith')
console.log(vova)



// Multiple inharitance is forbiden
// class Skills {

// }

// class Customer extends User, Skills { }


class Customer extends User {
    constructor(memberShip, status) {
        // super(firstName, lastName);
        super(...arguments);
        this.memberShip = memberShip;
        this.status = status
    }

    getFullName() {
        return `${this.firstName} ${this.lastName} !!!`;
    }

    sayHello() {
        console.log(this.firstName.toUpperCase() + "!!!")
    }
}

let sara = new Customer('Sara', 'Johns', 'Basic+', 'simple-customer');
console.log(sara.firstName)

// console.log(sara.getFullName())
sara.sayHello()