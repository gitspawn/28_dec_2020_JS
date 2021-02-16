let http = require('http');
let server = http.createServer((req, res) => {
  // console.log(res)
  res.write('Hello from nodejs!')
  res.end()
})

server.listen(5000, () => {
  console.log('App listening on port ', 5000)
})