// CRUD

let express = require('express');
let members = require('../../Members')
let router = express.Router();
let uuid = require('uuid')

// Get all members
router.get('/', (req, res) => {
  res.json(members);
});


// Get single user
router.get('/:id', (req, res) => {
  // console.log(req.params.id)
  let found = members.some((member) => member.id === Number(req.params.id))
  if (found) {
    res.send(members.filter((member) => member.id === Number(req.params.id)))
  } else {
    res.status(400).json({
      msg: 'User not found'
    })
  }
})



// Create user
router.post('/', (req, res) => {
  // console.log(req.baseUrl);
  // console.log(req.body);
  let newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    sttus: 'offline',
  }

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({
      msg: "Provide name and email"
    })
  }

  members.push(newMember);
  return res.json(members)

})


// Update single user
router.put('/:id', (req, res) => {
  let found = members.some((member) => member.id === Number(req.params.id))
  if (found) {
    let updateMember = req.body;
    members.forEach((member) => {
      if (member.id === Number(req.params.id)) {
        member.name = updateMember.name ? updateMember.name : member.name
        member.email = updateMember.email ? updateMember.email : member.email
        res.json({ msg: "Member updated", member })
      }
    })

    res.send(members.filter((member) => member.id === Number(req.params.id)))
  } else {
    res.status(400).json({
      msg: 'User not found to update'
    })
  }
})


// Delete User
router.delete('/:id', (req, res) => {
  let found = members.some((member) => member.id === Number(req.params.id))
  if (found) {
    res.json({
      msg: "Member deleted",
      members: members.filter((member) => member.id !== Number(req.params.id))
    })
  } else {
    res.status(400).json({
      msg: 'User not found to delete'
    })
  }
})


module.exports = router;