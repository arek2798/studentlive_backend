const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    important: {
        type: Boolean,
        required: true
    }
}, { collection: 'tasks' });

mongoose.model('task', TaskSchema);