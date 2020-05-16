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
        Note.find({ userID: req.query.userID, date: { $regex: /.*2020-05-13.*/ } })
            .then(results => res.send(results))
            .catch(err => console.log(err))
    },
}

module.exports = event;