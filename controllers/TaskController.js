const mongoose = require('mongoose');
require('../models/Task');

const Task = mongoose.model('task');

const task = {
    addTask: async (req, res) => {
        const newTaskContent = {
            userID: req.body.userID,
            done: req.body.done,
            content: req.body.content,
            date: req.body.date,
            time: req.body.time,
            important: req.body.important
        }

        try {
            await new Task(newTaskContent).save((err, task) => {
                res.send(task);
            })
        } catch (err) {
            res.sendStatus(500);
            console.log(err);
        }
    },

    getTasks: (req, res) => {
        Task.find({ userID: req.query.userID })
            .then(result => res.send(result))
            .catch(err => console.log(err));
    },

    updateTask: (req, res) => {
        const updateTaskContent = {
            userID: req.body.userID,
            done: req.body.done,
            content: req.body.content,
            date: req.body.date,
            time: req.body.time,
            important: req.body.important
        };
        Task.findByIdAndUpdate(req.params.id, updateTaskContent)
            .then(updateTask => res.send(updateTask))
            .catch(err => console.log(err));
    },

    deleteTask: (req, res) => {
        Task.findByIdAndDelete(req.params.id)
            .then((result) => {
                if (!result) {
                    res.sendStatus(404)
                } else {
                    res.sendStatus(200);
                }
            })
            .catch(err => res.sendStatus(500));
    }
}

module.exports = task;