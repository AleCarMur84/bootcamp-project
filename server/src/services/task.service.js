let tasks = [];

const obtenerTodas = () => {
  return tasks;
};

const crearTarea = (data) => {
  const newTask = {
    id: Date.now(),
    title: data.title,
    completed: false
  };

  tasks.push(newTask);
  return newTask;
};

const eliminarTarea = (id) => {
  const index = tasks.findIndex(task => task.id === Number(id));

  if (index === -1) {
    throw new Error('NOT_FOUND');
  }

  tasks.splice(index, 1);
};

module.exports = {
  obtenerTodas,
  crearTarea,
  eliminarTarea
};