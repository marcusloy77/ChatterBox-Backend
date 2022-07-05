const express = require('express')

const User = require('../models/user')
const router = express.Router()
const bcrypt = require('bcrypt')

router.get('/:username', (req, res) => {

  const userName = req.params.username
  console.log(req.params)

  User.findByUserName(userName).then(user => {
    console.log(userName)
    if (user) {
      res.json({avaliable: false})
    }
    else {
      res.json({avaliable: true})
    }
  })
})


router.post('/', (req, res) => {
  const { userName, password } = req.body
  User.findByUserName(userName).then(user => {
    if (user) {
      const isValidPassword = bcrypt.compareSync(password, user.password_digest)

      if (isValidPassword) {
        req.session.userId = user.id 
        res.json({correctLogin: true, userId: user.id, userName: user.user_name })
      } else {
        res.json({correctLogin: false })
        }
    } else {
      res.json({correctLogin: false })
      }
    }
  )
})
  


module.exports = router