const
Events = require('../models/Event.js')

    module.exports = {
        index: (req, res) => {
            Events.find({}, (err, events) => {
                res.json(events)
            })
        },
    
        show: (req, res) => {
            Events.findById(req.params.id, (err, events) => {
                res.json(events)
            })
        },
    
        // create a new event
        create: (req, res) => {
            console.log(req.body)
            console.log(req.user)
            const newEvent = new Events(req.body)
            newEvent.user = req.user
            newEvent.save((err, event) => {
                res.json({success: true, message: "Event created...", event})
            })
        },
    
        // update an existing event
        update: (req, res) => {
            console.log(req.body)
            Events.findById(req.params.id, (err, event) => {
                Object.assign(event, req.body)
                event.save((err, updatedevent) => {
                    res.json({success: true, message: "event updated.", event})
                })
            })
        },
    
        // delete an existing event
        destroy: (req, res) => {
            Events.findByIdAndRemove(req.params.id, (err, event) => {
                res.json({success: true, message: "event deleted.", event})
            })
        }
}