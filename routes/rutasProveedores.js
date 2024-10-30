const express = require('express');
const router =express.Router();
const proveedoresController= require('../controllers/proveedoresController');

//rutas del crud

router.post('/', proveedoresController.agregarProveedores);
router.get('/', proveedoresController.buscarProveedor);
router.get('/:id', proveedoresController.mostrarProveedores);
router.put('/:id', proveedoresController.actualizarProveedor);
router.delete('/:id', proveedoresController.eliminarProveedor);


module.exports = router;