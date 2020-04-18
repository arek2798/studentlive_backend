const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    },
    content: {
        type: String,
    },
    created: {
        type: String,
    }
}, { collection: 'notes' });

mongoose.model('note', noteSchema);

