En este documento voy a recopilar distintos prompts utilizados durante el desarrollo del proyecto.

Analizaré qué prompts funcionan mejor y por qué, aplicados a generación de código, refactorización y documentación.

# Prompt Engineering aplicado al desarrollo

## Prompts con rol

### Prompt 1

**Prompt:**

Actúa como un desarrollador senior de JavaScript y revisa una función de mi proyecto TaskFlow que usa LocalStorage. Dime si hay errores o cosas que se puedan mejorar y dame una versión mejor del código.

**Contexto:**

He usado este prompt para mejorar funciones del proyecto, sobre todo las que guardan y cargan datos de las tareas.

**Resultado:**

La IA ha detectado algunos problemas en el código, como nombres de variables poco claros y partes repetidas. También ha propuesto una versión más limpia de la función.

**Por qué funciona bien:**

Funciona bien porque le digo claramente qué rol tiene que tomar (desarrollador senior) y qué quiero que haga (revisar y mejorar código). También le doy contexto del proyecto.

---

### Prompt 2

**Prompt:**

Actúa como un experto en frontend y UX y analiza la interfaz de mi aplicación TaskFlow. Dime qué cosas podría mejorar para que sea más fácil de usar.

**Contexto:**

Lo he usado para ver cómo mejorar la interfaz de la aplicación sin tener muchos conocimientos de diseño.

**Resultado:**

La IA ha sugerido mejorar la organización de los elementos, cambiar algunos textos y hacer la interfaz más clara.

**Por qué funciona bien:**

Funciona porque le doy un rol claro y le explico qué tipo de aplicación es. Así las respuestas son más útiles.

---

### Prompt 3

**Prompt:**

Actúa como un experto en testing y dime qué pruebas podría hacer en mi aplicación TaskFlow para comprobar que todo funciona bien.

**Contexto:**

Lo he usado para añadir más pruebas a las que ya había hecho manualmente.

**Resultado:**

La IA ha dado varias ideas de pruebas, incluyendo algunos casos que no había tenido en cuenta.

**Por qué funciona bien:**

Funciona bien porque le digo exactamente lo que necesito (pruebas) y le doy contexto del proyecto.


## Few-shot prompting

### Prompt 1

**Prompt:**

Ejemplo de función bien estructurada:

function createTask(title) {
  return {
    id: Date.now(),
    title,
    completed: false
  };
}

Ahora mejora esta función siguiendo el mismo estilo:

function addTask(task) {
  storedTasks.push(task);
  console.log(storedTasks);
}

**Contexto:**

Lo he usado en TaskFlow para mantener un estilo consistente en las funciones que crean o añaden tareas.

**Resultado:**

La IA ha devuelto una versión más limpia de la función, evitando efectos innecesarios como logs y manteniendo un estilo similar al ejemplo.

**Por qué funciona bien:**

Funciona bien porque le doy un ejemplo claro de cómo quiero el código, así la IA copia el estilo en lugar de inventar otro diferente.

---

### Prompt 2

**Prompt:**

Ejemplo de filtro de tareas:

if (filter === "completed") {
  tasks = tasks.filter(t => t.completed);
}

Ahora aplica un filtro similar en esta función:

function getFilteredTasks(tasks, filter, searchText) {
  // mejorar aquí
}

**Contexto:**

Lo he usado para mejorar la lógica de filtrado de tareas en TaskFlow.

**Resultado:**

La IA ha aplicado el mismo patrón de filtrado por condición, manteniendo el estilo del ejemplo.

**Por qué funciona bien:**

Funciona porque la IA entiende el patrón a partir del ejemplo y lo replica en otro contexto.

---

### Prompt 3

**Prompt:**

Ejemplo de renderizado de elementos:

function renderItem(item) {
  const li = document.createElement("li");
  li.textContent = item.title;
  return li;
}

Ahora aplica el mismo estilo a esta función:

function createTaskElement(task) {
  // mejorar aquí
}

**Contexto:**

Lo he usado para mejorar el renderizado de tareas en el DOM.

**Resultado:**

La IA ha generado un elemento HTML siguiendo el mismo patrón del ejemplo, con estructura clara.

**Por qué funciona bien:**

Funciona porque le doy una estructura base y le pido que la siga, lo que hace que el código sea consistente.


---

## Razonamiento paso a paso

### Prompt 1

**Prompt:**

Explícame paso a paso qué hace esta función de TaskFlow y cómo funciona el uso de LocalStorage:

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(storedTasks));
}

**Contexto:**

Lo he usado para entender cómo se guardan los datos en el navegador en mi aplicación.

**Resultado:**

La IA explica paso a paso cómo convierte el array en string y lo guarda en LocalStorage.

**Por qué funciona bien:**

Funciona porque pide explicación paso a paso, lo que hace que el concepto sea más fácil de entender.

---

### Prompt 2

**Prompt:**

Analiza paso a paso esta función de TaskFlow y dime si tiene algún problema:

function handleFormSubmit(e) {
  e.preventDefault();

  const title = input.value.trim();
  if (title.length < 3) return;

  const newTask = createTask(title);
  addTask(newTask);

  input.value = "";
  updateUI();
}

**Contexto:**

Lo he usado para revisar la lógica de creación de tareas en el formulario.

**Resultado:**

La IA analiza cada línea y confirma que la lógica es correcta, explicando qué hace cada parte.

**Por qué funciona bien:**

Funciona porque obliga a la IA a descomponer el código en pasos, lo que ayuda a detectar errores o entenderlo mejor.

---

### Prompt 3

**Prompt:**

Explícame paso a paso cómo funciona este sistema de filtrado de tareas:

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

**Contexto:**

Lo he usado para entender cómo se combinan filtros de estado y búsqueda en TaskFlow.

**Resultado:**

La IA explica paso a paso cómo se va filtrando el array según condiciones.

**Por qué funciona bien:**

Funciona bien porque separa la lógica en pasos, lo que facilita entender funciones más complejas.


## Prompts con restricciones claras

### Prompt 1

**Prompt:**

Refactoriza esta función de TaskFlow, pero con estas condiciones:
- No cambies la lógica principal
- No añadas nuevas librerías
- Usa solo JavaScript vanilla
- Explica brevemente los cambios

function addTask(task) {
  storedTasks.push(task);
  console.log(storedTasks);
}

**Contexto:**

Lo he usado para mejorar funciones del proyecto sin cambiar su comportamiento original.

**Resultado:**

La IA ha simplificado la función eliminando el console.log y manteniendo la lógica original de añadir tareas.

**Por qué funciona bien:**

Funciona bien porque las restricciones obligan a la IA a no cambiar demasiado el código y centrarse solo en mejorar lo necesario.

---

### Prompt 2

**Prompt:**

Mejora esta función de TaskFlow con estas reglas:
- No uses frameworks ni librerías externas
- No cambies el nombre de la función
- Mantén la misma funcionalidad
- Haz el código más legible

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

**Contexto:**

Lo he usado para mejorar la legibilidad de una función importante del proyecto TaskFlow.

**Resultado:**

La IA ha reorganizado partes del código para hacerlo más claro, pero sin cambiar su funcionamiento.

**Por qué funciona bien:**

Funciona bien porque las restricciones limitan lo que puede hacer la IA y evitan cambios innecesarios.

---

### Prompt 3

**Prompt:**

Corrige posibles errores en esta función con estas condiciones:
- No cambies la estructura general del código
- No añadas nuevas funciones
- Solo corrige errores evidentes

function saveTasks() {
  localStorage.setItem("tasks", storedTasks);
}

**Contexto:**

Lo he usado para detectar errores en el uso de LocalStorage en TaskFlow.

**Resultado:**

La IA detecta que falta JSON.stringify y corrige solo ese detalle sin modificar más cosas.

**Por qué funciona bien:**

Funciona bien porque las restricciones obligan a centrarse solo en el error real sin reescribir todo el código.


## Uso de prompts en código real

### Prompt 1

**Prompt:**

Refactoriza esta función de mi proyecto TaskFlow para que sea más limpia y fácil de leer, pero sin cambiar su funcionamiento:

function handleFormSubmit(e) {
  e.preventDefault();

  const title = input.value.trim();
  if (title.length < 3) return;

  const newTask = createTask(title);
  addTask(newTask);

  input.value = "";
  updateUI();
}

**Contexto:**

Lo he usado para mejorar la función que crea tareas desde el formulario en TaskFlow.

**Resultado:**

La IA ha simplificado la función, manteniendo la lógica pero ordenando mejor el código y mejorando la claridad.

**Por qué funciona bien:**

Funciona bien porque se centra en un código real del proyecto y pide una mejora concreta sin cambiar la funcionalidad.

---

### Prompt 2

**Prompt:**

Mejora esta función de TaskFlow para evitar errores y hacerla más segura. No cambies la lógica general:

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(storedTasks));
}

**Contexto:**

Lo he usado para asegurar que el guardado de tareas en LocalStorage sea correcto.

**Resultado:**

La IA ha añadido pequeñas comprobaciones y ha dejado el código más robusto.

**Por qué funciona bien:**

Funciona porque aplica mejoras reales sobre código existente del proyecto, no sobre ejemplos inventados.

---

### Prompt 3

**Prompt:**

Refactoriza esta función de filtrado para que sea más clara, pero manteniendo exactamente el mismo resultado:

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

**Contexto:**

Lo he usado para mejorar la legibilidad del sistema de filtros en TaskFlow.

**Resultado:**

La IA ha reorganizado el código para que sea más fácil de leer sin cambiar el resultado final.

**Por qué funciona bien:**

Funciona porque se trabaja sobre lógica real del proyecto y se pide una mejora concreta en legibilidad.


## Catálogo de prompts útiles

A continuación guardo una serie de prompts que he usado o podría usar en el proyecto TaskFlow para mejorar código, entenderlo o refactorizarlo.

---

### Prompt 1 (refactor código)

Refactoriza esta función de JavaScript para que sea más legible sin cambiar su funcionamiento.

---

### Prompt 2 (detección de errores)

Analiza esta función y dime si tiene errores o posibles mejoras.

---

### Prompt 3 (explicación paso a paso)

Explícame paso a paso cómo funciona este código y qué hace cada parte.

---

### Prompt 4 (LocalStorage)

Explícame cómo guardar y recuperar datos correctamente usando LocalStorage en JavaScript.

---

### Prompt 5 (filtros)

Mejora esta función de filtrado para que sea más clara y fácil de mantener.

---

### Prompt 6 (validaciones)

Añade validaciones a este formulario para evitar errores de usuario.

---

### Prompt 7 (creación de funciones)

Crea una función en JavaScript que haga lo siguiente: [describir funcionalidad].

---

### Prompt 8 (UX simple)

Sugiere mejoras simples para hacer más intuitiva esta interfaz de usuario.

---

### Prompt 9 (debugging)

Encuentra el error en este código y explícalo de forma sencilla.

---

### Prompt 10 (explicación de concepto)

Explícame qué es [concepto JavaScript] con ejemplos simples.


## Reflexión final

En este ejercicio he aprendido a utilizar la inteligencia artificial de una forma más útil dentro del desarrollo de software, no solo como una herramienta para generar código, sino como una ayuda para entenderlo, mejorarlo y documentarlo.

He visto que la calidad de las respuestas depende mucho de cómo se escriben los prompts. Cuando los prompts están bien estructurados y tienen contexto claro, la IA da respuestas mucho más útiles y precisas.

En el proyecto TaskFlow he podido aplicar esto para analizar funciones, mejorar código, entender cómo funciona LocalStorage y detectar posibles errores. También me ha servido para aprender nuevas formas de organizar mejor el código y pensar de forma más estructurada.

En general, considero que el prompt engineering es una herramienta muy útil para el desarrollo moderno, ya que permite trabajar más rápido y entender mejor el código, siempre que se use correctamente.