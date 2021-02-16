const path = require('path');
const fs = require('fs');

// Create dir (folder)
// fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
//   if (err) {
//     console.log(err);
//     return
//   }
//   console.log('Directory created...')
// })


// Frite to file
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello world', (err) => {
//   if (err) {
//     console.log(err);
//     return
//   }
//   console.log('File created...')

//   // Append to file
//   fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' React framework', (err) => {
//     if (err) {
//       console.log(err);
//       return
//     }
//     console.log('File created...')
//   })

//   fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' Vue JS', (err) => {
//     if (err) {
//       console.log(err);
//       return
//     }
//     console.log('File created...')
//   })
// })


// Read file
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return
//   }
//   console.log(data)
// })

// Renamer file
fs.rename(
  path.join(__dirname, 'test', 'hello.txt'),
  path.join(__dirname, 'test', 'pizza.txt'),
  (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Renamed...')
  }
)