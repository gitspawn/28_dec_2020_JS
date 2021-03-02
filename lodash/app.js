// let lodash = _;

// console.log(lodash)

let result = _.isEqual(3, 10);
result = _.isArray(['a', 'b'])
// result = _.isArray(1000);
// _.forEach([2, 3, 4], (elem) => {
//   console.log(elem)
// })

// let user = { name: 'Vova', age: 20 }
// _.each(user, function (item, key) {
//   console.log(item, key)
// })

// let arr = [];

// _.each(user, (item) => {
//   arr.push(item)
// })

// console.log(arr)


// let arr = [0, 0, 'a', 'b', 'a', 'c', 1, 4, 5, 5];

// let newArr = _.uniq(arr)
// console.log(newArr);


// let arr = [1, 2, 3].map(function (item) {
//   return item * 2
// })

// console.log(arr)

// let data = [
//   { id: 1, name: 'Vova' },
//   { id: 2, name: 'Saveta' },
//   { id: 3, name: 'Bob' }
// ]

// let newArr = _.map(data, ({ id }) => {
//   return id
// })

// let newArr = _.map(data, 'name')
// let newArr = _.map(data, 'id')
// console.log(newArr)


// let arr = [1, 2, 3, 4, 5];
// let filteredArr = _.filter(arr, (elem) => {
//   return elem > 3
// })

// console.log(filteredArr)


// let users = [
//   { id: 1, name: 'Vova' },
//   { id: 2, name: 'Sveta' },
//   { id: 3, name: 'Bob' }
// ]


// )let usersFilter = _.filter(users, (user) => {
//   return user.name === 'Sveta'
// }

// let usersFilter = _.filter(users, { id: 1 })
// let usersFilter = _.filter(users, { name: "Bob" })

// let usersFilter = _.find(users, { name: "Bob" })
// let usersFilter = _.find(users, { id: 2 })

// console.log(usersFilter)


let users = [
  { id: 1, name: 'Vova', likes: 100 },
  { id: 2, name: 'Sveta', likes: 200000 },
  { id: 3, name: 'Bob', likes: 5 },
  { id: 4, name: 'Mike', likes: 5 }
]

// let sortBy = _.sortBy(users, 'likes')
// let sortBy = _.sortBy(users, 'name')
// console.log(sortBy)


let groupBy = _.groupBy(users, 'likes')
console.log(groupBy)