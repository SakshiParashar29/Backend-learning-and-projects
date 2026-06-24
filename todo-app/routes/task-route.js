const express = require('express');
const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../controllers/task-controller');


const router = express.Router();

router.post('/create', createTask);
router.get('/all', getAllTasks);
router.get('/:id', getTaskById);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router

