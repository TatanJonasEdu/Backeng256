const Cliente = require('../models/Clientes');

//funcion agregar clientes

exports.agregarClientes = async(req,res) => {
    try{

        let clientes;
        clientes = new Cliente(req.body);
        await clientes.save();
        res.json(clientes);
    }catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al agregar al cliente')
    }
} 

//buscar clientes

exports.buscarClientes = async(req, res) => {
    try{
        const clientes = await Cliente.find();
        res.json(clientes);

    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al buscar al cliente');

    }
}

// funcion buscar cliente id
exports.mostrarCliente = async(req, res) => {
    try{

        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg: "cliente no encontrado con ID"})
        }else{
            res.json(clientes);
        }

    } catch(error) {
        console.log(error);
        res.status(500).send('hubo un error al mostrar un cliente');

    }
}

//funcion modificar cliente metodo path

exports.modificarClientes = async(req, res) => {
    try {

        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new:true });
        if(!clientes){
            res.status(404).send({msg: "cliente no encontrado con ID para modificar"})
        }else{
            res.json(clientes);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al modificar un cliente')
    }
}

//funcion modificar cliente metodo put

exports.actualizarClientes = async(req, res) => {
    try {
        const clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new:true });
        if(!clientes){
            res.status(404).send({msg: "cliente no encontrado con ID para modificar"})
        }else{
            res.json(clientes);
        }
    } catch (error) {
            console.log(error);
            res.status(500).send('hubo un error al modificar un cliente');
    }
}

//eliminar clientes

exports.eliminarClientes = async (req, res) => {
    try {
        let clientes =await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg: "cliente no encontrado con ID para modificar"})
        }else{
            await Cliente.findOneAndDelete({_id: req.params.id});
            res.json({msg: "el cliente ha sido eliminado"})
        }
        
    } catch (error) {
        console.log(error);
            res.status(500).send('hubo un error al modificar un cliente');
    }
}
