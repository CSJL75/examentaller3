const express = require('express');
const app = express();
const servicioRoutes = require('./routes/servicioRoutes');

// Ruta raíz ("/")
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Servicios');
});

// Usar las rutas definidas en servicioRoutes
app.use('/api', servicioRoutes);

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
