const { suma } = require("./mathUtils");

try {
  const resultado = suma(2, 3);
  console.log("Resultado:", resultado);
} catch (error) {
  console.error("Error:", error.message);
}

