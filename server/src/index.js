require('./config/env');

console.log("ESTE ARCHIVO ES EL QUE SE ESTÁ EJECUTANDO");

const express = require('express');
const cors = require('cors');

const taskRoutes = require('./routes/task.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api/v1/tasks', taskRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('TaskFlow API funcionando 🚀');
});

// Puerto
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

