const taskService = require('../services/task.service');

const getTasks = (req, res) => {
  const tasks = taskService.obtenerTodas();
  res.json(tasks);
};

const createTask = (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== 'string' || title.trim().length < 3) {
    return res.status(400).json({
      error: 'El título es obligatorio y debe tener al menos 3 caracteres'
    });
  }

  const newTask = taskService.crearTarea({ title });
  res.status(201).json(newTask);
};

const deleteTask = (req, res) => {
  try {
    taskService.eliminarTarea(req.params.id);
    res.status(204).send();
  } catch (error) {
    if (error.message === 'NOT_FOUND') {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  getTasks,
  createTask,
  deleteTask
};