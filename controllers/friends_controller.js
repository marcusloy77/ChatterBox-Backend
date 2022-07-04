const express = require('express')

const router = express.Router()
const Friend = require('../models/friend')
const User = require('../models/user')


router.get('/:id', (req, res) => {
	console.log('at router friends')
  const id = req.params.id
  Friend
    .getFriendRequests(id)
    .then(list => res.json({list}))
})

router.post('/', (req, res) => {
	console.log('at post router friends, accepting friend request')

	console.log(req.body)

	User
		.findByUserName(req.body.friendUsername)
		.then(friendProfile => {
			const friendId = friendProfile.id
			if (req.body.response){
				Friend
					.acceptRequest(req.body.loggedInUserId, req.body.loggedInUsername, friendId, req.body.friendUsername)
			} else {
				Friend
					.denyRequest(req.body.loggedInUserId, req.body.loggedInUsername, friendId, req.body.friendUsername)
			}
		})

	// Friend
	// 	.acceptRequest
})


module.exports = router