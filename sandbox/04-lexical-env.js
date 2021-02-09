// Lexical env
let age = 45;

// {
//     age: 45
// }

function getData() {
    // Lexical env 
    // let age = 30
    {
        // age: 30,
        // userName: 'Sara';
    }
    console.log(age)
    let userName = 'Sara'

    function fn() {
        // Lexical env 
        // {

        // }
        console.log(userName)
    }
    fn();
}

getData();