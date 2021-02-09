// let test = function () {
//     console.log(arguments)
//     // console.log(a, b, c, d, e)
// }

// console.log(test)

// test(10, 22, 33, 44, 55, 34545, 2342354, 13412423)

// function a() { } console.log(a.prototype === a.__proto__);

const inventory = {
    items: ['Knife', 'Gas mask'],
    add(itemName) {
        // console.log(`Adding ${itemName} to inventory`);
        this.items.push(itemName);
    },
    remove(itemName) {
        // console.log(`Removing ${itemName} from inventory`);
        // inventory.items = inventory.items.filter((item) => item !== itemName);
    },
};
const invokeInventoryAction = function (itemName, action) {
    console.log(`Invoking action on ${itemName}`);
    action(itemName);
};

// console.log(inventory)
// inventory.add('Pizza')

// console.log(inventory)

invokeInventoryAction('Medkit', inventory.add.bind(inventory));
console.log(inventory)
// Invoking action on Medkit // Adding Medkit to inventory console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit'] invokeInventoryAction('Gas mask', inventory.remove); // Invoking action on Gas mask // Removing Gas mask from inventory console.log(inventory.items); // ['Knife', 'Medkit']
