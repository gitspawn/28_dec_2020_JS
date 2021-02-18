let express = require('express')
let app = express();
let path = require('path');
// let members = require('./Members');

// Basic routing
// app.get('/api/members', (req, res) => {
//   res.json(members);
// })

// app.get('/api/members/:id', (req, res) => {
//   // console.log(req.params.id)
//   let found = members.some((member) => member.id === Number(req.params.id))
//   if (found) {
//     res.send(members.filter((member) => member.id === Number(req.params.id)))
//   } else {
//     res.status(400).json({
//       msg: 'User not found'
//     })
//   }
// })

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// API Routes
app.use('/api/members', require('./routes/api/members'))
app.use('/api/users', require('./routes/api/users'))


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`))