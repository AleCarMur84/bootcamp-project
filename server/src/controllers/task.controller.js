const taskService = require('../services/task.service');

const getTasks = (req, res) => {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
};

const createTask = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'El título es obligatorio' });
  }

  const newTask = taskService.createTask(title);
  res.status(201).json(newTask);
};

module.exports = {
  getTasks,
  createTask
};