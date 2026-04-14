function suma(a, b) {
  console.log("Sumando números...");
  if (typeof a !== "number" || typeof b !== "number" || Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error("Ambos argumentos deben ser números válidos");
  }
  return a + b;
}

module.exports = { suma };

