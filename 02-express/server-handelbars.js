let express = require('express')
let app = express();
let path = require('path');
let exphbs = require('express-handlebars');
let members = require('./Members');

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





// Handlebars
let hbs = exphbs.create({
  dafautLayout: "main",
  extname: "hbs"
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');


// Handlebar routes
app.get('/', (req, res) => {
  res.render("index", {
    isHome: true,
    title: "Home page app!!!",
    members
  })
})

app.get('/about', (req, res) => {
  res.render("about", {
    isAbout: true,
    title: "About page",
    members
  })
})


// Set staic folder
app.use(express.static(path.join(__dirname, 'public')))

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// API Routes
app.use('/api/members', require('./routes/api/members'))
app.use('/api/users', require('./routes/api/users'))


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`))