import Shop from './Shop.js';
// import items from './Shop.js';
// console.log(items)

let shopItems = [
    { id: 1, name: 'bananes', price: 27, amount: 200, category: 'fruits' },
    { id: 2, name: 'apples', price: 35, amount: 150, category: 'fruits' },
    { id: 3, name: 'potato', price: 9, amount: 500, category: 'vegetables' },
    { id: 4, name: 'tomatos', price: 30, amount: 350, category: 'vegetables' }
];

let atb = new Shop('ATB-market', 'Irpin', shopItems)
atb.init()
