const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controller');

router.post('/', productosController.crearProducto);
router.get('/', productosController.obtenerProductos);
router.get('/:id', productosController.obtenerProducto);
router.put('/:id', productosController.actualizarProducto);
router.delete('/:id', productosController.eliminarProducto);

module.exports = router;