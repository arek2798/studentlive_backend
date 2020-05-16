const mongoose = require('mongoose');
require('../models/Event');

const Event = mongoose.model('event');

const event = {
    addEvent: async (req, res) => {
        const newEventContent = {
            userID: req.body.userID,
            date: req.body.date,
            finish: req.body.finish,
            content: req.body.content,
            color: req.body.color
        }

        try {
            await new Event(newEventContent).save((err, event) => {
                res.send(event);
            })
        } catch (err) {
            res.sendStatus(500);
            console.log(err);
        }
    },

    getMonthEvents: (req, res) => {
        Event.find({ userID: req.query.userID, date: { $regex: ".*" + req.query.month + ".*" } })
            .then(results => res.send(results))
            .catch(err => console.log(err))
    },

    removeEvent: (req, res) => {
        Event.findByIdAndDelete(req.params.id)
            .then(result => {
                if (!result) {
                    res.sendStatus(404);
                    res.send(result)
                }
                else res.sendStatus(200);
            })
            .catch(err => res.sendStatus(500));
    }
}

module.exports = event;