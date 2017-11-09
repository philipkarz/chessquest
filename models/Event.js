const
mongoose = require('mongoose'),
eventSchema = new mongoose.Schema({
   name: String,
   location: String,
   time: String,
   description: String,
   user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const EventModel = mongoose.model('Event', eventSchema)
module.exports = EventModel