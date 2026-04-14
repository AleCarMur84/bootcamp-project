En este documento voy a documentar mi experiencia utilizando Cursor como entorno de desarrollo asistido por inteligencia artificial.

Incluiré flujos de trabajo, atajos utilizados y ejemplos reales de uso dentro del proyecto TaskFlow.

## Exploración de la interfaz

He abierto el proyecto TaskFlow en Cursor correctamente y he explorado la interfaz principal.

He identificado las siguientes partes:

- Barra lateral: donde se muestra la estructura del proyecto (archivos y carpetas como docs y ai).
- Editor de código: área principal donde se visualiza y edita el código.
- Terminal integrada: permite ejecutar comandos dentro del proyecto.
- Chat de IA: permite interactuar con el asistente para resolver dudas o generar código.
- Herramientas de edición asistida: funciones para modificar y generar código con ayuda de IA.

Esta exploración me ha permitido entender la estructura del entorno de desarrollo y cómo interactuar con las herramientas de Cursor.

## Uso de cambios multi-archivo (Agent / Composer)

He utilizado el agente de Cursor para realizar una refactorización del código.

El asistente ha dividido la lógica en dos archivos:
- mathUtils.js: contiene la función suma y la exporta con module.exports
- test.js: importa la función mediante require y la utiliza dentro de un bloque try/catch

Esto ha permitido separar responsabilidades y mejorar la organización del código.

Además, se ha añadido manejo de errores con try/catch para evitar que el programa falle si ocurre algún problema durante la ejecución.

## Atajos de teclado utilizados con más frecuencia

- Ctrl + P → buscar archivos rápidamente
- Ctrl + K → edición inline con IA
- Ctrl + Shift + L → seleccionar múltiples coincidencias
- Ctrl + Enter → ejecutar sugerencias de la IA

## Ejemplos concretos de mejora con Cursor

### Ejemplo 1
Cursor mejoró la función suma añadiendo validación de tipos de datos, evitando errores cuando los valores no son números.

### Ejemplo 2
Cursor refactorizó el código separando la función suma en un archivo independiente (mathUtils.js) y actualizando automáticamente las importaciones en test.js, mejorando la organización del proyecto.


