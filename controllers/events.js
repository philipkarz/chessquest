const
Events = require('../models/Event.js')

    module.exports = {
        index: (req, res) => {
            
        },
    
        show: (req, res) => {
            Events.findById(req.params.id, (err, events) => {
                res.json(events)
            })
        },
    
        // create a new event
        create: (req, res) => {
            console.log(req.body)
            Events.create(req.body, (err, event) => {
                if(err) return res.json({success: false, code: err.code})
                res.json({success: true, message: "event created", token})
            })
        },
    
        // update an existing event
        update: (req, res) => {
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