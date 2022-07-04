const Conversation = require('../models/conversation')

const sendMessage = (data) => {
  console.log(data)
  sender_id = data.sender_id
  sender_username = data.sender_username
  reciever_id = data.reciever_id
  message = data.message
  Conversation.addMessage(sender_id, reciever_id, message, sender_username)
}


module.exports = sendMessage