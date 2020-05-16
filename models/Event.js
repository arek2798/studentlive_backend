const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    finish: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    }
}, { collection: "events" });

mongoose.model('event', EventSchema);