const BASE_URL = 'http://localhost:3000/api/v1/tasks';

// GET tareas
export const getTasks = async () => {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error('Error al obtener tareas');
  }

  return res.json();
};

// POST crear tarea
export const createTask = async (title) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title })
  });

  if (!res.ok) {
    throw new Error('Error al crear tarea');
  }

  return res.json();
};

// DELETE tarea
export const deleteTask = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });

  if (!res.ok && res.status !== 204) {
    throw new Error('Error al eliminar tarea');
  }
};

