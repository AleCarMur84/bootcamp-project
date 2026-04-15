En este documento voy a comparar la resolución de problemas con y sin el uso de inteligencia artificial.

Analizaré diferencias en tiempo, calidad del código y comprensión del problema.


# Experimentos con IA en programación

## Introducción

En este documento comparo la resolución de varios problemas de programación hechos primero sin ayuda de IA y después con ayuda de IA. El objetivo es analizar diferencias en tiempo, calidad del código y comprensión del problema.

---

# Problema 1: Sumar números de un array

## Sin IA

Primero lo resolví recorriendo el array con un bucle for y acumulando los valores en una variable.

let numbers = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

## Con IA

La IA propuso usar el método reduce:

let sum = numbers.reduce((acc, num) => acc + num, 0);

## Comparación

- Tiempo: con IA mucho más rápido
- Calidad del código: con IA más limpio y moderno
- Comprensión: sin IA entendí mejor el proceso, con IA entendí una forma más optimizada

---

# Problema 2: Filtrar números pares

## Sin IA

let numbers = [1, 2, 3, 4, 5, 6];
let result = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    result.push(numbers[i]);
  }
}

## Con IA

let result = numbers.filter(num => num % 2 === 0);

## Comparación

- Tiempo: con IA más rápido
- Calidad del código: con IA más simple y legible
- Comprensión: sin IA mejor para entender lógica básica, con IA mejor para optimización

---

# Problema 3: Invertir una palabra

## Sin IA

let word = "hola";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
}

## Con IA

let reversed = word.split("").reverse().join("");

## Comparación

- Tiempo: con IA mucho más rápido
- Calidad del código: con IA más compacto
- Comprensión: sin IA ayuda a entender bucles, con IA se aprende métodos de string

---

# Tarea proyecto 1: Añadir tarea (TaskFlow)

## Sin IA

function addTask(task) {
  storedTasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(storedTasks));
}

## Con IA

La IA sugirió mantener la función igual pero mejorar legibilidad:

function addTask(task) {
  storedTasks.push(task);
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(storedTasks));
}

## Comparación

- Tiempo: con IA más rápido refactorizar
- Calidad del código: con IA más modular
- Comprensión: sin IA mejor para ver flujo completo

---

# Tarea proyecto 2: Filtrado de tareas

## Sin IA

Se revisó manualmente la función getFilteredTasks del proyecto y se intentó entender la lógica paso a paso.

## Con IA

La IA explicó la función separando:
- filtrado por estado
- filtrado por búsqueda
- retorno final

## Comparación

- Tiempo: con IA mucho más rápido
- Calidad: con IA más claridad en la lógica
- Comprensión: con IA mejor entendimiento de funciones complejas

---

# Tarea proyecto 3: Formulario de tareas

## Sin IA

function handleFormSubmit(e) {
  e.preventDefault();

  const title = input.value.trim();

  if (title.length < 3) return;

  const newTask = createTask(title);
  addTask(newTask);

  input.value = "";
}

## Con IA

La IA sugirió pequeñas mejoras de claridad y estructura sin cambiar la lógica.

## Comparación

- Tiempo: con IA más rápido detectar mejoras
- Calidad: con IA más limpio
- Comprensión: sin IA mejor para entender flujo del formulario

---

## Conclusión final

Los experimentos muestran que la IA acelera mucho el desarrollo y mejora la calidad del código, especialmente en casos de refactorización y uso de métodos más modernos.

Sin embargo, resolver primero sin IA ayuda a entender mejor la lógica de programación. La combinación de ambos métodos es la más efectiva para aprender y desarrollar proyectos.