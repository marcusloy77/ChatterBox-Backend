const express = require('express')
const app = express()
const port = process.env.PORT || 3001


const http = require('http')
const cors = require('cors')
const { Server }= require('socket.io')

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"]
  }
})

io.on('connection', (socket) => {
  console.log(`user-connected: ${socket.id}`)

  socket.on("join-room", (data) => {
    socket.join(data)
  })


  socket.on('message', (data) => {
    console.log(data)
    socket.to(data.room).emit("recieve-message", data)
  })
})

server.listen(3002, () => {
  console.log('server running io')
})
//chat server work
//const http = require('http').createServer(app)




const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

const sessionsController = require('./controllers/sessions_controller')
const usersController = require('./controllers/users_controller')
const friendsController = require('./controllers/friends_controller')



app.listen(port, () => console.log(`main server is listening on port ${port}`))

app.use(logger)

//to recieve json data to put in req.body
app.use(express.json())

app.use(sessions)

app.use('/api/sessions', sessionsController)
app.use('/api/users', usersController)
app.use('/api/friends', friendsController)
