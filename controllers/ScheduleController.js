const mongoose = require('mongoose');
require('../models/Schedule');

const Schedule = mongoose.model('schedule');

const schedule = {
    getSchedule: (req, res) => {
        Schedule.find({ userID: req.query.userID })
            .then(results => res.send(results))
            .catch(err => console.log(err))
    },

    updateSchedule: (req, res) => {
        console.log(req.body.days);
        const updateScheduleContent = {
            userID: req.body.userID,
            days: req.body.days
        };
        Schedule.findByIdAndUpdate(req.params.id, updateScheduleContent)
            .then(updateSchedule => res.send(updateSchedule))
            .catch(err => console.log(err))
    },

    createSchedule: async (req, res) => {
        const newSchedule = {
            userID: req.body.userID,
            days: req.body.days
        }
        try {
            await new Schedule(newSchedule).save((err, schedule) => {
                res.send(schedule);
            });
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
}

module.exports = schedule;