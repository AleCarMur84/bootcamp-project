TaskFlow - Diseño de la aplicación
Descripción general
TaskFlow es una aplicación web para que el manager del restaurante gestione el día a día del personal. Permite controlar turnos, tareas, vacaciones, horas pendientes y formación de los empleados, centralizando toda la información en un solo lugar.
Secciones principales
Cabecera: Nombre de la app e información general del día.
Lista de turnos y tareas: Visualización de empleados por turno y sus tareas asignadas.
Panel de empleados: Datos detallados de cada trabajador: días libres, horas pendientes y formación.
Formulario de gestión: Añadir, modificar o eliminar empleados y tareas según la planificación del manager.
Acciones del usuario
Consultar y planificar turnos diarios.
Asignar o modificar tareas de cada turno.
Gestionar vacaciones y días libres del personal.
Registrar formación y otra información relevante de los empleados.
Visualizar estadísticas básicas sobre tareas completadas y pendientes.
Wireframe / diseño
El diseño se ha realizado en Excalidraw (archivo: design.excalidraw) y refleja la distribución de las secciones y la interacción prevista: turnos, tareas, empleados y panel de estadísticas.

Testing manual de la aplicación

Se han realizado pruebas manuales para comprobar el correcto funcionamiento de la aplicación:

Se ha probado la aplicación con la lista vacía, verificando que no se muestran tareas y que las estadísticas son correctas.
Se ha intentado añadir una tarea sin título, comprobando que el sistema no lo permite.
Se ha añadido una tarea con un título muy largo para verificar que la interfaz no se rompe.
Se han marcado varias tareas como completadas y se ha comprobado que el estado se actualiza correctamente.
Se han eliminado varias tareas y se ha verificado que desaparecen correctamente.
Se ha recargado la página para comprobar que los datos se mantienen gracias a LocalStorage.

https://bootcamp-project-swart.vercel.app

---

## Versión mejorada del proyecto

TaskFlow es una aplicación web de gestión de tareas para un restaurante.

Permite gestionar tareas de forma sencilla, centralizada y eficiente.

### Funcionalidades

Crear tareas
Editar tareas
Eliminar tareas
Filtrar tareas (todas, pendientes, completadas)
Buscar tareas por texto
Marcar todas como completadas
Borrar tareas completadas
Persistencia con LocalStorage

### Tecnologías

HTML
CSS
JavaScript
LocalStorage
Tailwind CSS

### Uso básico

Escribe una tarea y añádela
Usa filtros para ver tareas
Busca tareas por texto
Marca como completadas o elimínalas

---

## Funciones principales del proyecto

### createTask(title)
Crea una nueva tarea con ID único, título y estado de completado.

### addTask(task)
Añade una tarea al array principal.

### renderTasks()
Muestra las tareas en pantalla aplicando filtros y búsqueda.

### getFilteredTasks(tasks, filter, searchText)
Filtra tareas por estado y por texto de búsqueda.

### markAllCompleted()
Marca todas las tareas como completadas.

### clearCompletedTasks()
Elimina las tareas completadas.

### updateUI()
Actualiza la interfaz completa (tareas + estadísticas + guardado).

### saveTasks()
Guarda las tareas en LocalStorage.

## Futuras mejoras (Roadmap)

Gestión de empleados
Sistema de turnos
Vacaciones del personal
Formación de empleados

---

## Ejemplos de uso

Añadir tarea: escribir texto en el input y pulsar “Añadir”
Editar tarea: pulsar botón “Editar” en una tarea
Eliminar tarea: pulsar botón “Eliminar”
Filtrar tareas: usar botones de filtro (todas, pendientes, completadas)
Buscar tarea: escribir texto en el buscador
Marcar como completada: marcar el checkbox de una tarea
Borrar completadas: pulsar botón de eliminar completadas

# TaskFlow API

## Descripción
API REST para gestión de tareas creada con Node.js + Express.

---

## Tecnologías
Node.js
Express
CORS

---

## Estructura del proyecto

server/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   └── index.js

---

## Endpoints

### Obtener todas las tareas
GET /api/v1/tasks

---

### Crear tarea
POST /api/v1/tasks

Body:
{
  "title": "mi tarea"
}

---

### Eliminar tarea
DELETE /api/v1/tasks/:id

---

## Manejo de errores

404 NOT_FOUND → Tarea no encontrada  
500 → Error interno del servidor

---

## Pruebas en Postman

Crear tarea:
POST /api/v1/tasks

Obtener tareas:
GET /api/v1/tasks

Eliminar tarea existente:
DELETE /api/v1/tasks/:id → 204 No Content

Eliminar tarea inexistente:
DELETE /api/v1/tasks/999999 → 404 NOT_FOUND

---

## Estado del proyecto
PI REST funcional  ok
CRUD completo  ok
Manejo de errores implementado  ok
Probado con Postman ok

## Arquitectura del proyecto

El proyecto está dividido en dos partes principales:

### Frontend
Maneja la interfaz de usuario
Se encarga de renderizar tareas
Consume la API del backend mediante fetch
Gestiona estados de carga, éxito y error

### Backend (Node.js + Express)
Expone una API REST en `/api/v1/tasks`
Gestiona la lógica de negocio en services
Controla las peticiones mediante controllers
Define rutas en routes

## Middlewares en Express

El servidor utiliza middlewares para procesar las peticiones antes de llegar a las rutas.

### Middlewares utilizados

`express.json()`  
  Permite leer y parsear el cuerpo de las peticiones en formato JSON.

`cors()`  
  Habilita el acceso al backend desde el frontend, evitando bloqueos por CORS.

Middleware de errores global  
Captura cualquier error no controlado en la aplicación y devuelve una respuesta adecuada:
404 si el error es `NOT_FOUND`
500 para errores internos del servidor

## Ejemplos de uso de la API REST

### Obtener todas las tareas
GET /api/v1/tasks

Respuesta:
[
  {
    "id": 123456,
    "title": "Ejemplo tarea",
    "completed": false
  }
]

---

### Crear una tarea
POST /api/v1/tasks

Body:
{
  "title": "Nueva tarea"
}

Respuesta:
{
  "id": 123457,
  "title": "Nueva tarea",
  "completed": false
}

---

### Eliminar una tarea
DELETE /api/v1/tasks/:id

Ejemplo:
DELETE /api/v1/tasks/123456

Respuesta:
204 No Content