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

        console.log(newEventContent);

        try {
            await new Event(newEventContent).save((err, event) => {
                // console.log(event);
                console.log("event");
                res.send(event);
            })
        } catch (err) {
            res.sendStatus(500);
            console.log("blas");
            console.log(err);
        }
    },
}

module.exports = event;