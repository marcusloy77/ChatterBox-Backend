const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

const sessionsController = require('./controllers/sessions_controller')
const usersController = require('./controllers/users_controller')

app.listen(port, () => console.log(`server is listening on port ${port}`))

app.use(logger)

//to recieve json data to put in req.body
app.use(express.json())

app.use(sessions)

app.use('/api/sessions', sessionsController)
app.use('/api/users', usersController)
