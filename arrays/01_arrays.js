// Array
// let arr = []; // []
// console.log(arr.constructor)


// let str = 'Vova';
// let favoriteNumber = 34;
// let isAdmin = true;
// let login = null;
// let samsung = undefined;
// let user = {name: 'Sara', age: 25};

// let  arr = ['apple', 34, true, user, null, undefined, {name: 'Sara', age: 25}, function getName(params) {}, 'ssfsgs', favoriteNumber, login];

// 
// Проверка на массив
// let result = Array.isArray([]);
// result = Array.isArray('hello')
// result = Array.isArray(45)
// result = Array.isArray(arr)
// console.log(result);


// let oldArrSyntax = new Array(1,2,3,45,6);
// new Array('dsd', 235)

// []
// console.log(Array.isArray(oldArrSyntax))

// let arr = new Array(2)
// console.log(arr)


// Array Lenght
// let  arr = ['apple', ['a', 4, 'c', [5, 100], 45 ], 34, true, user, null, undefined, {name: 'Sara', age: 25}, function getName(params) {}, 'ssfsgs', favoriteNumber, login, 'werwer', 45, 'qwe'];
// arr = [];
// console.log(arr.length)


// Обратится по индексу
// let index = arr[0];
// index = arr[4];
// index = arr[arr.length -1];
// index = arr[1];
// index = arr[1][1];
// index = arr[1][3];
// console.log(index)
// arr[1] = 'hello';
// arr[4] = 'pizza'
// console.log(arr)


// Найти индекс
// let  arr = ['apple', 34, true, 34, user, null, undefined, {name: 'Sara', age: 25}, function getName(params) {}, 'ssfsgs', favoriteNumber, login, 'werwer', 45, 'qwe'];
// let value = arr.indexOf(34); // 1
//  value = arr.lastIndexOf(34); // 10 отсчет с конца 
// console.log(value)


// Изменять массив
// let fruits = ['apple', 'pear', 'orange'];
// fruits.push() // добавить в конец массива
// fruits.push('Vova');
// fruits.push('Hello world');
// // fruits.pop() // удалить последний элемент
// // fruits.shift() // удалить первый элемент элемент
// fruits.unshift('qwe') // добавить в начало
// console.log(fruits)


// Удалить любой эдемент массива;
// [].splice()
// let numbers = [23, 43, 55, 5, 30, 10];
// // let newArr = numbers.splice(1, 1); //
// // let newArr = numbers.splice(2, 1); // 
// // let newArr = numbers.splice(0, 1); //
// // let newArr = numbers.splice(0, 2); //
// // let newArr = numbers.splice(4, 1);
// let newArr = numbers.splice(1, 1);
// // console.log(newArr)
// console.log(newArr)

// delete numbers[1];
// console.log(numbers)


// Конкатенация, слияние массивов
// let numbers = [23, 43, 55, 5, 30, 10];
// let fruits = ['apple', 'pear', 'orange'];
// let phones = ['LG', 'Sony', 'Nokia'];
// Spred
// let concatArr = [...numbers, ...fruits, ...phones];
// console.log(concatArr)


// let resultArr = numbers.concat(fruits);
// console.log(resultArr)
// resultArr.concat(phones);
// console.log(resultArr)
// let resultArr2 = fruits.concat(numbers);
// console.log(resultArr)
// console.log(resultArr2)


// Поиск в массиве
// 1. // [].indexOf() -1 или индекс
// 2. [].includes()
//  let numbers = [23, 43, 55, 5, 30, 10];
// let result = numbers.includes(100)
// result = numbers.includes(30)
// console.log(result)
// 3. [].find()


// Преобразование в массив
// let arr = Array.from('hello');
// arr = Array.from(3434343);
// Spred operator
// arr = [...'vova']
// console.log(Array.isArray(arr))


// Преобразовать в строку.
// let arr = ['hello', 'world', 'js', 'react'];
// arr.reverse();
// let str = arr.join(' ');
// let newArr = str.split(' ')
// console.log(newArr)

// split, // строку в массив
// reverse // развернуть массив
// join // соеденить обратно в строку

// let hello = 'hello world';
// let revesedString = hello.split(' ').reverse().join(' ');
// console.log(revesedString)
// let arr = ['hello', 'world', 'js', 'react'];
// let result = arr.toString();
// console.log(typeof result)
