let fruits = ['apple', 'pear', 'melon'];
let fruitToFind = 'banana';


let findFriut = function (arr, item) {
    if (arr.includes(item)) {
        return true;
    }
    return false
}


let displayFruits = function (fruit) {
    let result = fruit ? 'Нашли' : 'Не нашли'
    console.log(result)
}


let isFruit = findFriut(['apple', 'pear', 'melon'], 'apple')
displayFruits(isFruit)

// console.log(isFruit)