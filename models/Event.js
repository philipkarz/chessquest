const
mongoose = require('mongoose'),
eventSchema = new mongoose.Schema({
   type: String,
   location: String,
   description: String,
   user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const Event = mongoose.model('Event', eventSchema)
module.exports = User