En este documento voy a comparar el uso de distintos asistentes de inteligencia artificial como ChatGPT y Claude.

Analizaré su capacidad para explicar conceptos técnicos, detectar errores en código y generar funciones a partir de descripciones.

# Comparativa entre asistentes de IA

## Prompt usado
Explícame de forma clara y con ejemplos en JavaScript los siguientes conceptos técnicos:
Closures, Event Loop, Hoisting.

---

## Respuesta ChatGPT

## 1. Closures

Un closure ocurre cuando una función recuerda el entorno en el que fue creada, incluso después de que ese entorno haya terminado.

function crearContador() {
  let contador = 0;

  return function () {
    contador++;
    console.log(contador);
  };
}

const contar = crearContador();
contar();
contar();

---

## 2. Event Loop

El Event Loop es el sistema que permite a JavaScript manejar tareas asíncronas aunque sea un lenguaje de un solo hilo.

console.log("Inicio");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("Fin");

---

## 3. Hoisting

El hoisting es el comportamiento por el cual JavaScript mueve declaraciones al inicio del contexto de ejecución.

console.log(x);
var x = 5;


## Respuesta Claude

## 1. Closures

Un closure ocurre cuando una función "recuerda" las variables del ámbito donde fue creada, incluso después de que ese ámbito haya terminado de ejecutarse.

function crearContador() {
  let cuenta = 0;
  
  return {
    incrementar() {
      cuenta++;
      return cuenta;
    },
    obtener() {
      return cuenta;
    }
  };
}

const contador = crearContador();

contador.incrementar();
contador.incrementar();
contador.obtener();

function configurarBotones() {
  const botones = document.querySelectorAll('.btn');
  
  botones.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      console.log(`Clickeaste el botón ${index}`);
    });
  });
}

---

## 2. Event Loop

JavaScript es single-threaded, pero puede manejar operaciones asíncronas gracias al event loop.

console.log('1 - Inicio');

setTimeout(() => {
  console.log('2 - Timeout (tarea asíncrona)');
}, 0);

Promise.resolve().then(() => {
  console.log('3 - Promise (microtarea)');
});

console.log('4 - Fin');

---

## 3. Hoisting

JavaScript "eleva" las declaraciones de variables y funciones al inicio de su ámbito antes de ejecutar el código.

console.log(nombre);
var nombre = 'Ana';

var nombre;
console.log(nombre);
nombre = 'Ana';

console.log(a);
var a = 1;

console.log(b);
let b = 2;

saludar();
function saludar() {
  console.log('Hola!');
}

despedir();
var despedir = function() {
  console.log('Adiós!');
};


## Comparativa ChatGPT vs Claude

### Claridad
ChatGPT: explicación clara, directa y fácil de entender para conceptos básicos.  
Claude: también clara, pero con más explicaciones adicionales que pueden hacerla más larga.

### Profundidad
ChatGPT: nivel más básico, se centra en la idea principal de cada concepto sin ampliar demasiado.  
Claude: más profundo, añade contexto, casos de uso y detalles adicionales en cada concepto.

### Ejemplos
ChatGPT: ejemplos sencillos y directos para entender rápidamente cada concepto.  
Claude: ejemplos más completos y prácticos, incluyendo casos reales como eventos en el DOM y uso de async/await.


## Funciones con errores intencionales

### Función 1
function sumar(a, b) {
  return a + b;
}

console.log(sumar(5)); // Error: falta un parámetro

---

### Función 2
function obtenerUsuario() {
  let usuario = "Alex"
  if (usuario = "Alex") {
    return true;
  }
}

console.log(obtenerUsuario());

---

### Función 3
function contar() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
}

contar();

## Bugs en funciones (ChatGPT)

### Función 1
function sumar(a, b) {
  return a + b;
}

console.log(sumar(5));
// BUG: falta un parámetro (b)
// EXPLICACIÓN: la función espera dos parámetros, pero solo se pasa uno.
// b es undefined, por lo que el resultado es NaN.

---

### Función 2
function obtenerUsuario() {
  let usuario = "Alex";

  if (usuario = "Alex") {
    return true;
  }
}

console.log(obtenerUsuario());

// BUG: uso de "=" en vez de "==="
// EXPLICACIÓN: "=" asigna valor, no compara.
// La condición siempre es true porque se reasigna "Alex".

---

### Función 3
function contar() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
}

contar();

// BUG: uso de var en el bucle con setTimeout
// EXPLICACIÓN: var no tiene scope de bloque.
// Todas las iteraciones comparten la misma variable i.
// Resultado: imprime 5 cinco veces.

## Bugs en funciones (Claude)

### Función 1
function sumar(a, b) {
  return a + b;
}

console.log(sumar(5));

// BUG: falta un parámetro (b)
// EXPLICACIÓN: la función espera dos parámetros pero solo se pasa uno.
// SOLUCIÓN: pasar ambos valores o asignar un valor por defecto.

---

### Función 2
function obtenerUsuario() {
  let usuario = "Alex";

  if (usuario = "Alex") {
    return true;
  }
}

console.log(obtenerUsuario());

// BUG: uso de "=" en lugar de "==="
// EXPLICACIÓN: "=" asigna el valor en vez de comparar.
// SOLUCIÓN: usar comparación estricta (===).

---

### Función 3
function contar() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
}

contar();

// BUG: uso de var en el bucle con setTimeout
// EXPLICACIÓN: var no tiene scope de bloque, todas las iteraciones comparten la misma variable.
// SOLUCIÓN: usar let para crear scope por iteración.

## Generación de funciones a partir de descripciones

### Prompt usado
Describe en lenguaje natural tres funciones distintas y genera su implementación en JavaScript.

---

## Función 1
Descripción:
Una función que reciba un número y devuelva si es par o impar.

### ChatGPT
function esPar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

### Claude
function esPar(numero) {
  return numero % 2 === 0 ? "Par" : "Impar";
}

---

## Función 2
Descripción:
Una función que reciba un array de números y devuelva la suma total.

### ChatGPT
function sumarArray(arr) {
  let suma = 0;

  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }

  return suma;
}

### Claude
function sumarArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

---

## Función 3
Descripción:
Una función que reciba un texto y devuelva el número de vocales que contiene.

### ChatGPT
function contarVocales(texto) {
  let contador = 0;
  const vocales = "aeiouAEIOU";

  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      contador++;
    }
  }

  return contador;
}

### Claude
function contarVocales(texto) {
  return (texto.match(/[aeiou]/gi) || []).length;
}


## Análisis de calidad del código generado

### ChatGPT
El código generado por ChatGPT es correcto, funcional y fácil de entender. Utiliza estructuras básicas como bucles y condicionales, lo que lo hace más accesible para principiantes. Sin embargo, en algunos casos no utiliza las soluciones más optimizadas o modernas de JavaScript (por ejemplo, no usa métodos como reduce o expresiones más compactas).

---

### Claude
El código generado por Claude es igualmente correcto y funcional, pero tiende a ser más optimizado y moderno. Utiliza métodos avanzados de JavaScript como reduce, match o operadores ternarios, lo que hace que el código sea más conciso. Puede ser menos intuitivo para principiantes en algunos casos, pero es más eficiente y expresivo.