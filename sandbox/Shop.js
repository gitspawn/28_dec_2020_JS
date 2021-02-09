// export default ['car', 'beer', 'toy']

export default class Shop {
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





