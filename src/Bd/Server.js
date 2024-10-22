const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '..', '.env') });
const express = require('express');
const sequelize = require('../Db');
const productosRoutes = require('../Routes/Productos.routes');

// ... resto del código

const app = express();

app.use(express.json());
app.use('/api/productos', productosRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
  })
  .catch(error => console.error('Error al sincronizar la base de datos:', error));