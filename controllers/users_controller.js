const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

//user
const User = require('../models/user')
const Friend = require('../models/friend')

router.post('/', (req, res) => {
  const {firstName, lastName, userName, email, password} = req.body
  console.log(req.body)
  //using bcrypt
  const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
  let id = ''
  User
    .create(firstName, lastName, userName, email, passwordDigest)
    .then(user => {
      id = user.id
      res.json({username: user.user_name, userId: user.id})})
    .then(() => {
      Friend.createList(id)
    })
})

router.get('/:searchQuery', (req, res) => {
  const searchQuery = req.params.searchQuery

  User
    .search(searchQuery)
    .then(userList => {
      res.json({userList})
    })
})

router.get('/getId/:username', (req, res) => {
  const username = req.params.username

  User
    .findByUserName(username)
    .then(user => {
      res.json(user)
    })
})

router.post('/addfriend', (req, res) => {
  const data = req.body
  const id = data.loggedInUserId
  const userName = data.loggedInUsername
  const friendId = data.friendId
  const friendUserName = data.friendUsername

  Friend
    .sendRequest(id, userName, friendId, friendUserName)
  
})

module.exports = router