const express = require('express');
const { subject, note, task, schedule, user } = require('../controllers');

const router = express.Router();

router.get('/subjects', subject.getAllSubjects);
router.post('/subject', subject.addSubject);
router.put('/subject/:id', subject.updateSubject);
router.delete('/subject/:id', subject.deleteSubject);

router.get('/notes', note.getAllNotes);
router.get('/note', note.getOneNote);
router.post('/note', note.addNote);
router.put('/note/:id', note.updateNote);
router.delete('/note/:id', note.removeNote);

router.get('/tasks', task.getTasks);
router.post('/task', task.addTask);
router.put('/task/:id', task.updateTask);
router.delete('/task/:id', task.deleteTask);

router.get('/schedule', schedule.getSchedule);
router.post('/schedule', schedule.createSchedule);
router.put('/schedule/:id', schedule.updateSchedule);

router.post('/user/signin', user.loginUser);
router.post('/user', user.addUser);

module.exports = router;