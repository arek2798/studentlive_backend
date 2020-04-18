const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    lecture: {
        type: Boolean,
        required: true,
    },
    exercise: {
        type: Boolean,
        required: true,
    },
    laboratory: {
        type: Boolean,
        required: true,
    },
    ects: {
        type: Number,
        required: true,
    },
    credit: {
        type: Boolean,
        required: true,
    },
    grade: {
        type: Number,
    }
}, { collection: 'subjects' });

mongoose.model('subject', SubjectSchema);