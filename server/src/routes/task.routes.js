const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task.controller');

// GET todas las tareas
router.get('/', taskController.getTasks);

// POST crear tarea
router.post('/', taskController.createTask);

// DELETE tarea por id
router.delete('/:id', taskController.deleteTask);

module.exports = router;