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

const form = document.querySelector("#task-form")
const input = document.querySelector("#task-input")


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

  tasks.forEach(task => {
    const li = document.createElement("li")

    li.innerHTML = `
     <input type="checkbox" class="task-checkbox" data-id="${task.id}"> 
      <span style="text-decoration: ${task.completed ? 'line-through' : 'none'}">
  ${task.title}
</span>
      <button class="delete-task">Eliminar</button>
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
 
     const li = e.target.parentElement
    li.remove()
 
     const title = li.querySelector("span").textContent
     tasks = tasks.filter(task => task.title !== title)
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

function updateUI() {
  renderTasks()
  renderStats()
  saveTasks()
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

updateUI()
