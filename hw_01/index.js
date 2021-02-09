// let userInput = prompt('Введите число');
// // String // 'qwewqeq'
// // String number // 5
// // null

// let data = userInput || null
// // console.log(typeof Number(data))
// console.log(typeof parseInt(data))
// // let data = 'киТаЙ'
// // 'Китай'

// '34' * 1

// let result = data.toLowerCase()
// let newResult = result[0].toUpperCase() + result.slice(1);
// console.log(newResult)



// if (data) {
//     console.log(typeof data)
// } else {
//     console.log('NULLLL')
// }




// Task 6

let input = prompt('Enter number');
let msg = 'Enter number'

let total = 0
for (let i = 0; input !== null; i++) {
    if (isNaN(input)) {
        alert('Не число');
        // input = prompt(msg);
    } else {
        total += parseInt(input)
        input = prompt(msg);
    }
}
alert(`Общая сумма чисел равна ${total}`)



// leet total = 0; for (; ;) { let input = prompt("Введите произвольное число"); if (!input) { alert(`Общая сумма чисел равна ${total}`); break; } else if (Number(input.replace(",", ".")) + total) { total = total + Number(input.replace(",", ".")); } else { alert("Было введено не число, попробуйте еще раз"); } } 