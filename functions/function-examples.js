// sum(x, y);


// FD
// function sayHello(){
//     console.log('Hello world');
// }
// sayHello();


// Paremeters
function sum(x, y) {
    console.log(x * y);
}

// Arguments
// sum( 5, 11 );


// LeapYaer
// function LeapYear(year){
//     // code
//     if (year % 4 === 0){
//         return true;
//     }   
//     return false
// }

// let result = LeapYear(2020);
// console.log(result)





function checkEmail(emailsArray, email) {
    if (emailsArray.includes(email)) {
        return true;
    }
    return false;
}


function greetUser(isEmloyee) {
    if (isEmloyee) {
        console.log('Hello employee!!')
    } else {
        console.log('Hello guest!!')
    }

}

const emails = ['admin@gmail.com', 'tester@gmail.com', 'vova@gmail.com', 'pm@gmail.com'];
const anotherEmail = 'vova@gmail.com';

let isStatus = checkEmail(emails, anotherEmail);
// console.log(isStatus)
// greetUser(isStatus)
greetUser(checkEmail(emails, anotherEmail))


// let result = LeapYear(2001);
// console.log(result)