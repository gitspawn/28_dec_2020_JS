function generateID() {
    return Math.random().toString().slice(2);
}

// console.log(generateID())

// CRUD
const shop = {
    name: 'Grosery store',
    adress: 'Kyiv',

    items: [
        { id: 1, name: 'bananes', price: 27, amount: 200, category: 'fruits' },
        { id: 2, name: 'apples', price: 35, amount: 150, category: 'fruits' },
        { id: 3, name: 'potato', price: 9, amount: 500, category: 'vegetables' },
        { id: 4, name: 'tomatos', price: 30, amount: 350, category: 'vegetables' }
    ],

    showItems() {
        console.log(this.name)
        for (let item of this.items) {
            let { id, name, price, amount, category } = item

            console.log(`ID: ${id}, Name: ${name}, Price: ${price}, Amount: ${amount}, Category: ${category}`)
            // console.log(`ID: ${item.id}, Name: ${item.name}, Price: ${item.price}, Amount: ${item.amount}, Category: ${item.category}`)
        }
    },

    // addItem(newItemInStore) {
    //     this.items.push(newItemInStore)
    // },


    addItem({ name, price, amount, category }) {
        // const newProduct = {
        //     id: generateID(),
        //     name: name,
        //     price: price,
        //     amount: amount,
        //     category: category
        // }

        const newProduct = {
            id: generateID(),
            name,
            price,
            amount,
            category
        }
        this.items.push(newProduct);
    },

    // removeItem(productName) {
    //     for (let item of this.items) {
    //         if (item.name === productName) {
    //             let index = this.items.indexOf(item)
    //             // console.log(index)
    //             this.items.splice(index, 1);
    //         }
    //     }
    // },

    removeItem(productName) {
        let itemsLength = this.items.length;
        for (let i = 0; i < itemsLength; i += 1) {
            if (this.items[i].name === productName) {
                this.items.splice(i, 1);
                break;
            }
        }
    },

    // updateItem(productName, newName) {
    //     let itemsLength = this.items.length;
    //     for (let i = 0; i < itemsLength; i++) {
    //         if (this.items[i].name === productName) {
    //             this.items[i].name = newName;
    //         }
    //     }
    // }


    updateItem(productName, newName) {
        for (let item of this.items) {
            if (item.name === productName) {
                item.name = newName
            }
        }
    }

}



// let onion =
//     { id: 5, name: 'onion', price: 10, amount: 50, category: 'vegetables' }

// let { name, price, amount, category} = onion

// shop.showItems()
// console.log(shop.items)
// shop.addItem({ id: 5, name: 'onion', price: 10, amount: 50, category: 'vegetables' })
// shop.addItem({ name: 'onion', price: 10, amount: 50, category: 'vegetables' })
// shop.addItem({ name: 'plum', price: 60, amount: 900, category: 'fruits' })
// shop.removeItem('potato');
// shop.removeItem('tomatos');
// shop.removeItem('apples');
shop.updateItem('apples', 'apples-red')
console.log(shop.items)
// shop.showItems()