require('./config/env.js');

const express = require('express');
const cors = require('cors');

const taskRoutes = require('./routes/task.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/v1/tasks', taskRoutes);

// Ruta prueba
app.get('/', (req, res) => {
  res.send('SERVER OK');
});

// Error handler (opcional pero correcto)
app.use((err, req, res, next) => {
  console.error(err);
  console.log('ERROR REAL:', err.message);
  
  if (err.message === 'NOT_FOUND') {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  return res.status(500).json({ error: 'Error interno del servidor' });
});

// Puerto
const PORT = 3000;

app.listen(PORT, () => {
  console.log('SERVIDOR VIVO EN 3000');
});