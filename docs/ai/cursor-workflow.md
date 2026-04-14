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

# Cursor Workflow - Model Context Protocol (MCP)

## 1. ¿Qué es el Model Context Protocol (MCP)?

El Model Context Protocol (MCP) es un estándar que permite conectar una inteligencia artificial con herramientas externas y con el sistema de archivos del entorno de trabajo.

Gracias a MCP, la IA puede:
- Leer archivos del proyecto
- Explorar carpetas
- Analizar código directamente
- Interactuar con herramientas externas (GitHub, filesystem, APIs, etc.)

En Cursor, MCP permite que la IA tenga contexto real del proyecto en lugar de trabajar solo con texto introducido manualmente.

---

## 2. Configuración de MCP en Cursor

La configuración de MCP en Cursor se realiza mediante un archivo de configuración en el proyecto:


Este archivo define los servidores MCP que se van a utilizar.

---

## 3. Instalación del servidor MCP

En este proyecto se ha utilizado el servidor:

- filesystem MCP

Este servidor permite acceder a los archivos del proyecto local.

Se ejecuta mediante Node.js usando npx.

---

## 4. Configuración utilizada

La configuración aplicada en el proyecto es la siguiente:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "C:\\Users\\aleja\\OneDrive\\Escritorio\\TaskFlow"
      ]
    }
  }
}

## 5. Comprobación del funcionamiento de MCP

Para comprobar que MCP funcionaba correctamente, se realizaron pruebas de acceso al sistema de archivos del proyecto.

La IA fue capaz de listar los archivos y carpetas del proyecto, incluyendo:

- index.html  
- app.js  
- style.css  
- README.md  
- docs/  

Esto demuestra que el servidor MCP filesystem está correctamente conectado y operativo.

---

## 6. Consultas realizadas con MCP

Se realizaron varias consultas para comprobar el funcionamiento del sistema MCP.

Las consultas realizadas fueron:

- Listado de archivos del proyecto TaskFlow  
- Exploración de la estructura de carpetas  
- Lectura del archivo app.js  
- Análisis del archivo index.html  
- Revisión del archivo README.md  

Estas consultas demuestran que la IA puede acceder al proyecto mediante MCP.

---

## 7. Utilidad de MCP en proyectos reales

El Model Context Protocol es útil en proyectos reales porque permite que la IA trabaje directamente con el entorno de desarrollo.

Gracias a MCP se puede:

- Analizar automáticamente proyectos de software  
- Detectar errores en el código  
- Automatizar tareas de desarrollo  
- Integrar herramientas externas como GitHub  
- Mejorar la productividad del desarrollador  

---

## 8. Conclusión

El MCP permite que la inteligencia artificial tenga acceso directo al proyecto dentro del entorno de desarrollo.

En este proyecto, se ha utilizado el servidor filesystem MCP para acceder al proyecto TaskFlow, permitiendo analizar su estructura y contenido de forma automática.

Esto demuestra la utilidad del MCP como herramienta de desarrollo moderna.