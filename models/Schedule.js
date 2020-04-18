const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
    userID: String,
    days: [
        {
            7: String,
            8: String,
            9: String,
            10: String,
            11: String,
            12: String,
            13: String,
            14: String,
            15: String,
            16: String,
            17: String,
            18: String,
            19: String,
            20: String,
            21: String,
            22: String,
        }
    ]
}, { collection: "schedule" });

mongoose.model('schedule', ScheduleSchema);