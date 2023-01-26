const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8000
app.use(express.urlencoded({
  extended : true
}))

app.use(express.json())
require('dotenv').config()

// connect api to front react
const cors = require('cors')
app.use(cors())
//

const usersRouter = require('./routes/usersRouter')
const postsRouter = require('./routes/postsRouter')

app.use('/api', usersRouter, postsRouter)

app.get('/', (req, res) => {
  res.send('Welcome to my api').status(200)
})

const mongoURI = process.env.MONGO_URI
mongoose.connect(mongoURI, {useNewUrlParser: true})

const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
