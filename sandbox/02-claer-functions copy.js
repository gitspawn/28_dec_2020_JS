let numbers = [1, 2, 3, 4, 5];

function includeNumber(arr, num) {
    for (let number of arr) {
        if (number === num) {
            return true;
        }
    }
    return false;
}

console.log(includeNumber(numbers, 3))
//============================================

let users = ['admin', 'moderator']

function addUser(users, canditate) {
    let newArr = [...users];
    newArr.push(canditate);
    return newArr;
}

console.log(addUser(users, 'QA'));