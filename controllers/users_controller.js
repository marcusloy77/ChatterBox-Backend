const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

//user
const User = require('../models/user')

router.post('/', (req, res) => {
  const {firstName, lastName, userName, email, password} = req.body
  console.log(req.body)
  //using bcrypt
  const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

  User
    .create(firstName, lastName, userName, email, passwordDigest)
    .then(userName => res.json(userName))
    .then(user => console.log(user))
  
})

module.exports = router