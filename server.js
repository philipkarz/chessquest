const
dotenv = require('dotenv').load(),
express = require('express'),
app = express(),
logger = require('morgan'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/chess',
PORT = process.env.PORT || 3001,
usersRoutes = require('./routes/users.js'),
eventsRoutes = require('./routes/events.js')


mongoose.connect(MONGODB_URI, (err) => {
console.log(err || `Connected to MongoDB.`)
})

// app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/chess', (req, res) => {
res.json({message: "Root."})
})

app.use('/chess/users', usersRoutes)
app.use('/chess/events', eventsRoutes)
// app.use('*', (req, res) => {
// res.sendFile(`${__dirname}/client/build/index.html`)
// })


app.listen(PORT, (err) => {
console.log(err || `Server running on port ${PORT}.`)
})