const Productos = require('../models/productos');

//funcion agregar productos

exports.agregarProductos = async(req,res) => {
    try{

        let productos;
        productos = new Productos(req.body);
        await productos.save();
        res.json(productos);
    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar al productos')
    }
} 

//buscar productos

exports.buscarProductos = async(req, res) => {
    try{
        const productos = await Productos.find();
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al buscar un producto');

    }
}

// funcion buscar productos id
exports.mostrarProductos = async(req, res) => {
    try{

        let productos = await Productos.findById(req.params.id);
        if(!productos){
            res.status(404).send({msg: "producto no encontrado con ID"})
        }else{
            res.json(productos);
        }

    } catch(error) {
        console.log(error);
        res.status(500).send('hubo un error al mostrar un producto');

    }
}


//funcion modificar productos metodo put

exports.actualizarProductos = async(req, res) => {
    try {
        const productos = await Productos.findOneAndUpdate({_id: req.params.id}, req.body, {new:true });
        if(!productos){
            res.status(404).send({msg: "producto no encontrado con ID para modificar"})
        }else{
            res.json(productos);
        }
    } catch (error) {
            console.log(error);
            res.status(500).send('hubo un error al modificar un producto');
    }
}

//eliminar productos

exports.eliminarProductos = async (req, res) => {
    try {
        let productos =await Productos.findById(req.params.id);
        if(!productos){
            res.status(404).send({msg: "producto no encontrado con ID para modificar"})
        }else{
            await Productos.findOneAndDelete({_id: req.params.id});
            res.json({msg: "el producto ha sido eliminado"})
        }
        
    } catch (error) {
        console.log(error);
            res.status(500).send('hubo un error al modificar un producto');
    }
}
