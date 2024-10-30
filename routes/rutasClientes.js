const express = require('express');
const router =express.Router();
const clientesController= require('../controllers/clienteController');

//rutas del crud

router.post('/', clientesController.agregarClientes);
router.get('/', clientesController.buscarClientes);
router.get('/:id', clientesController.mostrarCliente);
//router.patch('/:id', clientesController.modificarClientes);//metodo path
router.put('/:id', clientesController.actualizarClientes);
router.delete('/:id', clientesController.eliminarClientes);


module.exports = router;