const express = require('express')
const app = express()
const port = process.env.PORT || 3001

const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

const sessionsController = require('./controllers/sessions_controller')
const usersController = require('./controllers/users_controller')
const friendsController = require('./controllers/friends_controller')
const messagesController = require('./controllers/message_controller')

app.listen(port, () => console.log(`main server is listening on port ${port}`))

app.use(logger)

//to recieve json data to put in req.body
app.use(express.json())

app.use(sessions)

app.use('/api/sessions', sessionsController)
app.use('/api/users', usersController)
app.use('/api/friends', friendsController)
app.use('/api/messages', messagesController)

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}