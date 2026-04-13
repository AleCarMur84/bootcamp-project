const taskList = document.querySelector("#task-list")
const stats = document.querySelector("#stats")

console.log("JS cargado")

const task = {
  id: Date.now(),
  title: "Ejemplo de tarea",
  completed: false,
  createdAt: new Date()
}

let tasks = JSON.parse(localStorage.getItem("tasks")) || []
let filter = "all"
let searchText = ""

let darkMode = localStorage.getItem("darkMode") === "true"

if (darkMode) {
  document.body.classList.add("dark")
}

const form = document.querySelector("#task-form")
const input = document.querySelector("#task-input")
const searchInput = document.querySelector("#search-input")


const darkBtn = document.querySelector("#dark-mode-toggle")

form.addEventListener("submit", function (e) {
  e.preventDefault()

  if (input.value.trim() === "") return

  const newTask = {
    id: Date.now(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  tasks.push(newTask)

  console.log(tasks)

  input.value = ""

    updateUI()
})

function renderTasks() {
    
  console.log(tasks)

  taskList.innerHTML = ""

let filteredTasks = tasks

if (filter === "pending") {
  filteredTasks = tasks.filter(t => !t.completed)
}

if (filter === "completed") {
  filteredTasks = tasks.filter(t => t.completed)
}

filteredTasks = filteredTasks.filter(task =>
  task.title.toLowerCase().includes(searchText)
)

filteredTasks.forEach(task => {

    const li = document.createElement("li")

    li.innerHTML = `
<input type="checkbox"
  class="task-checkbox"
  data-id="${task.id}"
  aria-label="Marcar tarea como completada"
  ${task.completed ? "checked" : ""}>

<span style="text-decoration: ${task.completed ? 'line-through' : 'none'}">
  ${task.title}
</span>

<button
  class="delete-task"
  data-id="${task.id}"
  aria-label="Eliminar tarea ${task.title}">
  Eliminar
</button>
    `

    taskList.appendChild(li)
  })
}

function renderStats() {
  const total = tasks.length
  const completed = tasks.filter(t => t.completed).length
  const pending = total - completed

  stats.innerHTML = `
    <p>Total: ${total}</p>
    <p>Completadas: ${completed}</p>
    <p>Pendientes: ${pending}</p>
  `
}

taskList.addEventListener("click", function (e) {
   if (e.target.classList.contains("delete-task")) {
 
const id = Number(e.target.dataset.id)

    tasks = tasks.filter(task => task.id !== id)
    updateUI()
   }
 })

 taskList.addEventListener("change", function (e) {
  if (e.target.classList.contains("task-checkbox")) {

    const id = Number(e.target.dataset.id)

    const task = tasks.find(t => t.id === id)

    task.completed = e.target.checked

    updateUI()
  }
})

searchInput.addEventListener("input", function (e) {
  searchText = e.target.value.toLowerCase()
  updateUI()
})

darkBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark")

darkMode = document.body.classList.contains("dark")
  localStorage.setItem("darkMode", darkMode)
})

function updateUI() {
  renderTasks()
  renderStats()
  saveTasks()
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

updateUI()

function setFilter(value) {
  filter = value
  updateUI()
}
