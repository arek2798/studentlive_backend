const mongoose = require('mongoose');
require('../models/Subject');

const Subject = mongoose.model('subject');

const subject = {
    addSubject: async (req, res) => {
        const newSubjectContent = {
            userID: req.body.userID,
            name: req.body.name,
            lecture: req.body.lecture,
            exercise: req.body.exercise,
            laboratory: req.body.laboratory,
            ects: req.body.ects,
            credit: req.body.credit,
            grade: req.body.grade,
        };

        try {
            const newSubject = await new Subject(newSubjectContent).save((err, subject) => {
                res.send(subject);
                console.log(subject);
            });
        } catch (err) {
            console.log(err);
            res.sendstatus(500);
        }
    },
    updateSubject: (req, res) => {
        const updatedSubjectContent = {
            userID: req.body.userID,
            name: req.body.name,
            lecture: req.body.lecture,
            exercise: req.body.exercise,
            laboratory: req.body.laboratory,
            ects: req.body.ects,
            credit: req.body.credit,
            grade: req.body.grade,
        };
        Subject.findByIdAndUpdate(req.params.id, updatedSubjectContent)
            .then((updatedNote) => res.send(updatedNote))
            .catch((err) => console.log(err));
    },
    deleteSubject: (req, res) => {
        Subject.findByIdAndDelete(req.params.id)
            .then((result) => {
                if (!result) {
                    res.sendStatus(404)
                } else {
                    res.sendStatus(200);
                }
            })
            .catch((err) => res.sendStatus(500));
    },
    getAllSubjects: (req, res) => {
        console.log(req.query);
        Subject.find({ userID: req.query.userID })
            .then((results) => res.send(results))
            .catch((err) => console.log(err));
    }
}

module.exports = subject;