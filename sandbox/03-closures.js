// function createCalcFunction(n) {
//     // let n = 20

//     return function () {
//         console.log(1000 * n);
//     }
// }

// let data = createCalcFunction(100)
// console.log(data())


// i++
// ++i
// i--
// --i


// function createIncrement(n) {
//     return function (num) {
//         return n + num
//     }
// }

// let addOne = createIncrement(1)
// console.log(addOne(1));

// let addTen = createIncrement(10);
// console.log(addTen(10))


// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }

// let comUrl = urlGenerator('com');
// comUrl = urlGenerator('com');
// console.log(comUrl('facebook'))


// let netUrl = urlGenerator('net');
// console.log(netUrl('unian'))



function createFramevorkManager() {
    let framevorks = ['React', 'Angular'];

    return {
        dispalayInfo() {
            console.log(framevorks)
        },
        add(framevork) {
            framevorks.push(framevork)
        }
    }
}

let manager = createFramevorkManager();
// console.log(manager)

manager.dispalayInfo()
manager.add('VueJS');
manager.dispalayInfo()