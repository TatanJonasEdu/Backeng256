const Proveedores = require('../models/proveedores');

//funcion agregar clientes

exports.agregarProveedores = async(req,res) => {
    try{

        let proveedores;
        proveedores = new Proveedores(req.body);
        await proveedores.save();
        res.json(proveedores);
    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar al proveedor')
    }
} 

//buscar proveedor

exports.buscarProveedor = async(req, res) => {
    try{
        const proveedores = await Proveedores.find();
        res.json(proveedores);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al buscar al proveedor');

    }
}

// funcion buscar proveedor id
exports.mostrarProveedores = async(req, res) => {
    try{

        let proveedores = await Proveedores.findById(req.params.id);
        if(!proveedores){
            res.status(404).send({msg: "proveedor no encontrado con ID"})
        }else{
            res.json(proveedores);
        }

    } catch(error) {
        console.log(error);
        res.status(500).send('hubo un error al mostrar un proveedor');

    }
}

//funcion modificar proveedor metodo path

exports.modificarProveedores = async(req, res) => {
    try {

        const proveedores = await Proveedores.findByIdAndUpdate(req.params.id, req.body, {new:true });
        if(!proveedores){
            res.status(404).send({msg: "proveedor no encontrado con ID para modificar"})
        }else{
            res.json(proveedores);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al modificar un proveedor')
    }
}

//funcion modificar proveedor metodo put

exports.actualizarProveedor = async(req, res) => {
    try {
        const proveedores = await Proveedores.findOneAndUpdate({_id: req.params.id}, req.body, {new:true });
        if(!proveedores){
            res.status(404).send({msg: "proveedor no encontrado con ID para modificar"})
        }else{
            res.json(proveedores);
        }
    } catch (error) {
            console.log(error);
            res.status(500).send('hubo un error al modificar un proveedor');
    }
}

//eliminar proveedores

exports.eliminarProveedor = async (req, res) => {
    try {
        let proveedores =await Proveedores.findById(req.params.id);
        if(!proveedores){
            res.status(404).send({msg: "proveedor no encontrado con ID para modificar"})
        }else{
            await Proveedores.findOneAndDelete({_id: req.params.id});
            res.json({msg: "el proveedor ha sido eliminado"})
        }
        
    } catch (error) {
        console.log(error);
            res.status(500).send('hubo un error al modificar un proveedores');
    }
}
