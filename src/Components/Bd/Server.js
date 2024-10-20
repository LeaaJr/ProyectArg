const express = require('express');
const sequelize = require('./src/db');
const productosRoutes = require('./src/routes/productos.routes');
const path = require('path');

const app = express();

app.use(express.json());

// Rutas de la API
app.use('/api/productos', productosRoutes);

// Servir archivos estáticos de React en producción
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Sincronizar el modelo con la base de datos
sequelize.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(error => console.error('Error al sincronizar la base de datos:', error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));