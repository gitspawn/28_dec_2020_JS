let http = require('http');
const path = require('path');
const fs = require('fs');

let server = http.createServer((req, res) => {
  console.log(req.url);
  // res.writeHead(200, { 'Content-type': 'text/html' })
  // res.end('<h1>Home page</h1>')

  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, '04-sandbox', 'public', 'index.html'), (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     res.writeHead(200, { 'Content-type': 'text/html' });
  //     res.end(data)
  //   })
  // }

  // if (req.url === '/about') {
  //   fs.readFile(path.join(__dirname, '04-sandbox', 'public', 'about.html'), (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     res.writeHead(200, { 'Content-type': 'text/html' });
  //     res.end(data)
  //   })
  // }

  // let users = [
  //   { id: 1, name: 'Vova' },
  //   { id: 2, name: 'Sara' },
  //   { id: 3, name: 'Bob' }
  // ]
  // // REST API
  // if (req.url === '/api/users') {
  //   res.writeHead(200, { 'Content-type': 'application/json' });
  //   res.end(JSON.stringify(users))
  // }


  // Get file path




  let filePath = path.join(
    __dirname,
    '04-sandbox', 'public',
    req.url === '/' ? 'index.html' : req.url)

  // Extention
  let extname = path.extname(filePath)

  // Default content type
  let contentType = 'text/html';

  // Set content type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript'
      break;
    case '.css':
      contentType = 'text/css'
      break;
    case '.json':
      contentType = 'application/json'
      break;
    case '.png':
      contentType = 'image/png'
      break;
    case '.jpg':
      contentType = 'image/jpg'
      break;
  }


  // ReadFile
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // Page not found
        fs.readFile(path.join(__dirname, '04-sandbox', 'public', '404.html'), (err, content) => {
          res.writeHead(404, { 'Content-type': contentType });
          res.end(content, 'utf-8')
        })
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server error:  ${err}`);
      }

    } else {
      // Success
      res.writeHead(200, { 'Content-type': contentType });
      res.end(content, 'utf-8')
    }
  })

})

let PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log('App listening on port ', 5000)
})

