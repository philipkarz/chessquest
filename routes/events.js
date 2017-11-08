const
express = require('express'),
eventsRouter = new express.Router(),
eventsCtrl = require('../controllers/events.js'),
Events = require('../models/Event.js')
// verifyToken = require('../serverAuth.js').verifyToken

eventsRouter.get('/', eventsCtrl.index)
eventsRouter.get('/:id', eventsCtrl.show)
eventsRouter.patch('/:id', eventsCtrl.update)
eventsRouter.delete('/:id', eventsCtrl.delete)
eventsRouter.get('/:id/edit', eventsCtrl.edit)


module.exports = eventsRouter