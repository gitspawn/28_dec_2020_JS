let express = require('express');
let users = require('../../Users')
let router = express.Router();


router.get('/', (req, res) => {
  res.json(users);
});


module.exports = router;