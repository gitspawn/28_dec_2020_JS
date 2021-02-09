// ES6 Classes
class Product {
    #shopItems;

    constructor(brand, price, discount) {
        this._brand = brand;
        this.price = price;
        this.discount = discount
        this.#shopItems = ['apple', 'samsung']
    }

    #generateId() {
        return 12312423524525;
    }

    showShopItems() {
        console.log(this.#generateId())
        console.log(this.#shopItems);
    }

    // Getters / Setters
    // get brand() {
    //     return this._brand;
    // }
    // set brand(newBrandName) {
    //     this._brand = newBrandName;
    // }


    getPriceWithDiscount() {
        return (this.price * (100 - this.discount)) / 100
    }
    setPrice(newPrice) {
        this.price = newPrice
    }
}

let apple = new Product('Apple', 900, 5);
// console.log(apple.price)
// apple.price = 1200;
// console.log(apple.price)

apple.showShopItems()
// apple.#generateId()
// console.log(apple.price)
// console.log(apple.#shopItems)

// // Getter call
// console.log(apple.brand)
// // Setter call
// apple.brand = 'MegaApple';
// console.log(apple.brand)

// console.log(apple._brand)

// console.log(apple.brand)
// console.log(apple._brand)
// console.log(apple.getPriceWithDiscount())
// console.log(apple)
// console.log(apple instanceof Product)