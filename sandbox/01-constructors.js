// ES5

// let vova = {
//     name: 'Vova',
//     age: 20,
//     getInfo() {
//         console.log(this.name, this.age)
//     }
// }

// vova.getInfo()

// let sveta = {
//     name: 'Sveta',
//     age: 18
// }

// let mike = {
//     name: 'Mike',
//     age: 30
// }


// Constructor/Class/Function-constructor

function Product(brand, price, discount) {
    // { }
    // create link to this
    // return {}

    this.brand = brand;
    this.price = price;
    this.discount = discount

    this.getPriceWithDiscount = function () {
        return (this.price * (100 - this.discount)) / 100
    }
}

// Instance - объект, экземпляр класса, сущность, переменная экземпляра
// To instanciate
let apple = new Product('Apple', 900, 5);
let samsung = new Product('Samsung', 700, 12);
let lg = new Product('LG', 300, 30);

// Instance of
console.log(apple instanceof Array) // false
// console.log(apple instanceof Boolean) // false
console.log(apple instanceof Object) // true
console.log(apple instanceof Product) // true
// console.log(samsung instanceof Product)
// console.log(lg instanceof Product)


// console.log(samsung.price)
// console.log(samsung.getPriceWithDiscount())
// console.log(apple)

// console.log(apple.brand)
// console.log(apple.price)
// console.log(apple.getPriceWithDiscount())

// console.log(Product('Apple'))
// console.log(new Product('Apple'))


