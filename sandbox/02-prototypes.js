function Product(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount

    // this.getPriceWithDiscount = function () {
    //     return (this.price * (100 - this.discount)) / 100
    // }

    // this.setPrice = function (newPrice) {
    //     this.price = newPrice
    // }
}

Product.prototype.getPriceWithDiscount = function () {
    return (this.price * (100 - this.discount)) / 100
}

Product.prototype.setPrice = function (newPrice) {
    this.price = newPrice
}

let apple = new Product('Apple', 900, 5);
// console.log(apple.__proto__)

console.log(apple.hasOwnProperty('brand'))
// console.log(apple.hasOwnProperty('price'))
// console.log(apple.hasOwnProperty('pizza'))
console.log(apple.hasOwnProperty('setPrice'))
// // let samsung = new Product('Samsung', 700, 12);
// // let lg = new Product('LG', 300, 30);

// console.log(apple)


// let vova = new String('Vova')
// let isAdmin = new Boolean('true')
// console.log(vova)
// console.log(isAdmin)



// let phones = ['apple', 'samsung', 'lg'];
// phones.push('nokia')

// console.log(phones)
// let numbers = [10, 20, 30, 40]
// numbers.push(500)
// console.log(numbers)

// __proto__
//     __proto__
//             __proto__
//                 __proto__
//                         Object


