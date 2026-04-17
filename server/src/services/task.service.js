let tasks = [];

const getAllTasks = () => {
  return tasks;
};

const createTask = (title) => {
  const newTask = {
    id: Date.now(),
    title,
    completed: false
  };

  tasks.push(newTask);
  return newTask;
};

module.exports = {
  getAllTasks,
  createTask
};
