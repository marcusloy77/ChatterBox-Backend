const Conversation = require('../models/conversation')
const express = require('express')
const router = express.Router()


router.post('/', (req, res) => {
  data = req.body
  sender_id = data.sender_id
  sender_username = data.sender_username
  reciever_id = data.reciever_id
  message = data.message
  Conversation.addMessage(sender_id, reciever_id, message, sender_username)
})

router.get('/:ids', (req, res) => {
  const paramList = (req.params.ids.split('&'))
  const paramObj = paramList.reduce(( total, paramsa) => {
    const nameNum = paramsa.split('=')
    total[nameNum[0]] = nameNum[1]
    return total
  }, {})
  Conversation
    .getConversation(paramObj.id1, paramObj.id2)
    .then(resp => res.json(resp))

})


module.exports = router