// JSON
// String
// Number
// object
// array
// boolean
// null

// {
//   "name": "Vova",
//     "Age": "30",
//       "isAdmid": "true"
// }


// {
//   name: "Vova",
//     age: "30",
//       isAdmid: "true"
// }

// JSON.stringify()
// JSON.parse()


let user = {
  name: "Vova",
  age: "30",
  isAdmid: "true",

  toSting() {
    return `name: ${this.name}, age: ${this.age}, isAdmid: ${this.isAdmid}`
  }
}

let userSting = JSON.stringify(user);
console.log(userSting)
console.log(typeof userSting)

let parsedUser = JSON.parse(userSting)
console.log(parsedUser)
console.log(typeof parsedUser)






