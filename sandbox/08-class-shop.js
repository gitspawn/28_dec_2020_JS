let shopItems = [
    { id: 1, name: 'bananes', price: 27, amount: 200, category: 'fruits' },
    { id: 2, name: 'apples', price: 35, amount: 150, category: 'fruits' },
    { id: 3, name: 'potato', price: 9, amount: 500, category: 'vegetables' },
    { id: 4, name: 'tomatos', price: 30, amount: 350, category: 'vegetables' }
];


class Shop {
    #items

    constructor(name = '', adress = '', items = []) {
        this.name = name;
        this.adress = adress
        this.#items = items
    }
    showItems() {
        console.log(this.name)
        for (let item of this.#items) {
            let { id, name, price, amount, category } = item

            console.log(`ID: ${id}, Name: ${name}, Price: ${price}, Amount: ${amount}, Category: ${category}`)
        }
    }

    addItem({ name, price, amount, category }) {
        const newProduct = {
            id: this.#generateID(),
            name,
            price,
            amount,
            category
        }
        this.#items.push(newProduct);
    }

    removeItem(productName) {
        for (let item of this.#items) {
            if (item.name === productName) {
                let index = this.#items.indexOf(item)
                // console.log(index)
                this.#items.splice(index, 1);
            }
        }
    }

    updateItem(productName, newName) {
        for (let item of this.#items) {
            if (item.name === productName) {
                item.name = newName
            }
        }
    }


    #generateID() {
        return Math.random().toString().slice(2);
    }

    init() {
        this.showItems()
    }

}
let silpo = new Shop('Silpo', 'Kyiv', shopItems)
silpo.init()


let atb = new Shop('ATB-market', 'Irpin', shopItems)
atb.init()

// silpo.addItem({ name: 'plum', price: 60, amount: 900, category: 'fruits' })
// silpo.removeItem('potato')
// silpo.updateItem('potato', 'potato+++')
// silpo.showItems()
// console.log(silpo.items)
// silpo.showItems()

// console.log(silpo.items)
