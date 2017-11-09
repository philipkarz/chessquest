const
express = require('express'),
eventsRouter = new express.Router(),
eventsCtrl = require('../controllers/events.js'),
Events = require('../models/Event.js')

verifyToken = require('../serverAuth.js').verifyToken

eventsRouter.get('/', eventsCtrl.index)
eventsRouter.get('/:id', eventsCtrl.show)
eventsRouter.post('/', verifyToken, eventsCtrl.create)
eventsRouter.patch('/:id', eventsCtrl.update)
eventsRouter.delete('/:id', eventsCtrl.destroy)



module.exports = eventsRouter