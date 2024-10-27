const sequelize = require('./config/database');
const Producto = require('./models/Producto');

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');
    await sequelize.sync(); // Sincroniza los modelos con la base de datos
    console.log('Modelos sincronizados con la base de datos.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  } finally {
    await sequelize.close(); // Cierra la conexión
  }
};

syncDatabase();