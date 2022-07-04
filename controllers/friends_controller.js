const express = require('express')

const router = express.Router()
const Friend = require('../models/friend')
const User = require('../models/user')
const Conversation = require('../models/conversation')

router.get('/requests/:id', (req, res) => {
	console.log('at router friends requests')
  const id = req.params.id
  Friend
    .getFriendRequests(id)
    .then(list => res.json({list}))
})

router.get('/:id', (req, res) => {
	console.log('at router friends')
  const id = req.params.id
  Friend
    .getFriendList(id)
    .then(list => res.json({list}))
})
 
router.post('/', (req, res) => {
	console.log('at post router friends, accepting friend request')
	User
		.findByUserName(req.body.friendUsername)
		.then(friendProfile => {
			const friendId = friendProfile.id
			if (req.body.response){
				Friend
					.acceptRequest(req.body.loggedInUserId, req.body.loggedInUsername, friendId, req.body.friendUsername)

				Conversation
					.createConversation(req.body.loggedInUserId, friendId)

				Conversation
					.createRoom(req.body.loggedInUsername, req.body.friendUsername, req.body.loggedInUserId, friendId)
			} else {
				Friend
					.denyRequest(req.body.loggedInUserId, req.body.loggedInUsername, friendId, req.body.friendUsername)
			}
		})

	// Friend
	// 	.acceptRequest
})


module.exports = router