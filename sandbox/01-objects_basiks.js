// Object { }
// JSON

// let 
// const


// Properties, fields, св-ва
// let speed = 60;
// let maxSpeed = 200;

// function getSpecs() {
//     console.log('Car')
// }

// getSpecs()

let car = {
    speed: 60,
    maxSpeed: 200,
    power: [150, 200, 300,],
    carData: {
        vin: 123124323,
        yaer: 2020,
        city: 'Berlin',
        tyres: {
            radius: 17,
            season: 'winter'
        }
    },

    getSpecs() {
        console.log('Car')
    }
}
let power = car.power[2]
console.log(power)
let tyres = car.carData.tyres.radius
let season = car.carData.tyres.season
console.log(tyres)
console.log(season)
// console.log(car)



// car.manufacturer = 'Audi'
// car.color = 'black'

// car.isOn = function () {
//     console.log('Engine is on')
// }

// delete car.color
// delete car.manufacturer

// car.isOn()
// car.getSpecs()



// console.log(car)
// console.log(car.maxSpeed)
// console.log(car.power)

// car.getSpecs()

// console.log(car.getSpecs())