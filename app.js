const taskListElement = document.querySelector("#task-list");
const statsElement = document.querySelector("#stats");

console.log("JS cargado");

const exampleTask = {
  id: Date.now(),
  title: "Ejemplo de tarea",
  completed: false,
  createdAt: new Date()
};

let storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";
let currentSearchQuery = "";

let darkMode = localStorage.getItem("darkMode") === "true";

if (darkMode) {
  document.body.classList.add("dark");
}

const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const searchInput = document.querySelector("#search-input");
const darkBtn = document.querySelector("#dark-mode-toggle");

form.addEventListener("submit", handleFormSubmit);

/**
 * Maneja el envío del formulario de tareas
 * @param {Event} e - evento del formulario
 */

function handleFormSubmit(e) {
  e.preventDefault();

  const title = input.value.trim();
  const cleanTitle = title.toLowerCase();
  if (title.length < 3) return;

  const exists = storedTasks.some(
    task => task.title.toLowerCase() === cleanTitle
  );
  
  if (exists) return;

  const newTask = createTask(title);
  addTask(newTask);

  input.value = "";
  updateUI();
}

/**
 * Crea una nueva tarea
 * @param {string} title - título de la tarea
 * @returns {Object} tarea creada
 */

function createTask(title) {
  return {
    id: Date.now(),
    title,
    completed: false,
    createdAt: new Date()
  };
}

/**
 * Añade una tarea al array de tareas
 * @param {Object} task - tarea a añadir
 */

function addTask(task) {
  storedTasks.push(task);
  console.log(storedTasks);
}

/**
 * Renderiza las tareas en pantalla aplicando filtros y búsqueda
 */

function renderTasks() {
  const filteredTasks = getFilteredTasks(
    storedTasks,
    currentFilter,
    currentSearchQuery
  );

  renderTaskList(filteredTasks);
}


/**
 * Filtra las tareas según el estado y el texto de búsqueda
 * @param {Array} tasks - lista de tareas
 * @param {string} filter - filtro actual (all, pending, completed)
 * @param {string} searchText - texto de búsqueda
 * @returns {Array} lista de tareas filtradas
 */

function getFilteredTasks(tasks, filter, searchText) {
    let filtered = tasks;

    if (filter === "pending") {
      filtered = filtered.filter(t => !t.completed);
    } else if (filter === "completed") {
      filtered = filtered.filter(t => t.completed);
    }

    if (searchText.trim() !== "") {
      filtered = filtered.filter(t =>
        t.title.toLowerCase().includes(searchText.trim().toLowerCase())
      );
    }

    return filtered;
  }

  function createTaskElement(task) {
  const li = document.createElement("li");

  li.innerHTML = `
    <input type="checkbox"
      class="task-checkbox"
      data-id="${task.id}"
      ${task.completed ? "checked" : ""}>

    <span style="text-decoration: ${task.completed ? 'line-through' : 'none'}">
      ${task.title}
    </span>

    <button class="delete-task" data-id="${task.id}">
      Eliminar
    </button>

    <button class="edit-task" data-id="${task.id}">
      Editar
    </button>
  `;

  return li;
}

  function renderTaskList(tasks) {
    taskListElement.innerHTML = "";
    tasks.forEach(task => {
      const li = createTaskElement(task);
      taskListElement.appendChild(li);
    });
  }

 
  

function renderStats() {
  const total = storedTasks.length;
  const completed = storedTasks.filter(t => t.completed).length;
  const pending = total - completed;

  statsElement.innerHTML = `
    <p>Total: ${total}</p>
    <p>Completadas: ${completed}</p>
    <p>Pendientes: ${pending}</p>
  `;
}

taskListElement.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-task")) {
    const id = Number(e.target.dataset.id);

    storedTasks = storedTasks.filter(task => task.id !== id);
    updateUI();
  }
});

taskListElement.addEventListener("change", function (e) {
  if (e.target.classList.contains("task-checkbox")) {
    const id = Number(e.target.dataset.id);

    const task = storedTasks.find(t => t.id === id);
    task.completed = e.target.checked;

    updateUI();
  }
});

searchInput.addEventListener("input", function (e) {
  currentSearchQuery = e.target.value.toLowerCase();
  updateUI();
});

darkBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  darkMode = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", darkMode);
});

function updateUI() {
  renderTasks();
  renderStats();
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(storedTasks));
}

updateUI();

function sortTasksAZ() {
  storedTasks.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  updateUI();
}

function setFilter(value) {
  currentFilter = value;
  updateUI();
}

function markAllCompleted() {
  storedTasks.forEach(task => {
    task.completed = true;
  });

  updateUI();
}

console.log("deploy OK");


