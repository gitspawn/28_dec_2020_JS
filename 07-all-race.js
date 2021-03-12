let horses = [
  'Lightning',
  'Indigo',
  'Black',
  'Pluto',
  'Sue',
  'Wite fox'
];


let getRandomTime = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// _.range(1, 5)

// 1 Лошадь =========
const run = (horse) => {
  return new Promise((resolve, reject) => {
    let time = getRandomTime(2000, 5000)
    setTimeout(() => {
      resolve({ horse, time })
    }, time);
  })
}

// run(horses[5]).then(result => console.log(result))


// - Promise.all()
// - Promise.race()

// let promises = horses.map((horse) => run(horse))
let promises = horses.map(run)
// console.log(promises)

// Promise.all(promises).then(results => console.table(results))

// Promise.race(promises).then(winner => console.log(winner))

Promise.race(promises).then(({ horse, time }) => console.log(`Winner: ${horse}, time: ${time}`))