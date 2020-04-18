const mongoose = require('mongoose');
require('../models/Note');

const Note = mongoose.model('note');

const note = {
    getAllNotes: (req, res) => {
        Note.find({ userID: req.query.userID })
            .then(results => res.send(results))
            .catch(err => console.log(err))
    },

    getOneNote: (req, res) => {
        Note.find({ _id: req.query.id })
            .then(results => res.send(results))
            .catch(err => console.log(err))
    },

    removeNote: (req, res) => {
        Note.findByIdAndDelete(req.params.id)
            .then(result => {
                if (!result) {
                    res.sendStatus(404);
                    res.send(result)
                }
                else res.sendStatus(200);
            })
            .catch(err => res.sendStatus(500));
    },

    updateNote: (req, res) => {
        const updatedNoteContent = {
            userID: req.body.userID,
            title: req.body.title,
            category: req.body.category,
            content: req.body.content
        };
        Note.findByIdAndUpdate(req.params.id, updatedNoteContent)
            .then(updateNote => res.send(updateNote))
            .catch(err => console.log(err))
    },

    addNote: async (req, res) => {
        const date = new Date();
        const created = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
        console.log(created);
        const newNoteContent = {
            userID: req.body.userID,
            title: req.body.title,
            category: req.body.category,
            content: req.body.content,
            created: created,
        };
        console.log(newNoteContent);
        try {
            await new Note(newNoteContent).save((err, note) => {
                res.send(note);
            });
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
}

module.exports = note;