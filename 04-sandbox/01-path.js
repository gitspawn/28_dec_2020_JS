const path = require('path');

let result = path.basename

// result = path.basename(__filename)
// result = path.basename(__dirname)
// result = path.extname(__filename)
// result = path.parse(__filename)
// result = path.parse(__filename).dir
// console.log(result)

// Full path
let newPath = path.join(__dirname, 'test', 'about.html')
newPath = path.join(__dirname, '../..', 'test', 'about.html')
console.log(newPath)


  // / skillup /28_dec_2020_JS / 04 - sandbox / test / about.html
  // c:\\mudocs\indexedDB.txt