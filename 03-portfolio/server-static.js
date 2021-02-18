let express = require('express')
let app = express();
let path = require('path');


// Set staic folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`))