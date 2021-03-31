// for...in
// for...of
// ========================
// Iterator
// ========================
// let arrNames = ['Vova', 'Bob', 'Sara', 'Mike']
// function nameIterator(names) {
//   let nextIndex = 0;
//   return {
//     next: function () {
//       return nextIndex < names.length
//         ? { value: names[nextIndex++], done: false }
//         : { done: true }
//     }
//   }
// }


// for (let name of arrNames) {
//   console.log(name)
// }

// let names = nameIterator(arrNames);
// console.log(names.next().value)
// console.log(names.next().value)
// console.log(names.next().value)
// console.log(names.next().done)
// console.log(names.next().done)



// Generator
// function* sayName() {
//   yield [1, 2, 3, 4,];
//   yield 200;
//   yield 'Bob';
//   yield 'Mike';
// }

// let names = sayName();
// // console.log(names)
// // console.log(names.next())
// console.log(names.next().value)
// console.log(names.next().done)


function* createId() {
  let index = 100;

  while (2 + 2 == 4) {
    yield index++
  }
}

let genId = createId();
console.log(genId.next().value)
console.log(genId.next().value)
console.log(genId.next().value)
console.log(genId.next().value)
console.log(genId.next().value)
console.log(genId.next().value)
