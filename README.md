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
