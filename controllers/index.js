const subject = require('./SubjectController');
const note = require('./NoteController');
const task = require('./TaskController');
const schedule = require('./ScheduleController');
const user = require('./UserController');
const event = require('./EventController');

module.exports = {
    subject,
    note,
    task,
    schedule,
    event,
    user
};