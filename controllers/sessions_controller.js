const express = require('express')

const User = require('../models/user')
const router = express.Router()
const bcrypt = require('bcrypt')


router.get('/', (req, res) => {
    res.json({burgerLayers})
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