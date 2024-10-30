const express = require('express');
const router =express.Router();
const productosController= require('../controllers/productosController');

//rutas del crud

router.post('/', productosController.agregarProductos);
router.get('/', productosController.buscarProductos);
router.get('/:id', productosController.mostrarProductos);
router.put('/:id', productosController.actualizarProductos);
router.delete('/:id', productosController.eliminarProductos);


module.exports = router;