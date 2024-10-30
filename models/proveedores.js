const mongoose = require ('mongoose');

const proveeddoreseSchema = mongoose.Schema({

    nombreRazonSocial:{
        type: String,
        required: true
    },
    nit:{
        type: Number,
        required: true
    },
    telefonoProveedor:{
        type: Number,
        required: true
    },
    direccionProveedor:{
        type: String,
        required: true
    },
    correoProveedor:{
        type: String,
        required: true
    },
    nombreComercial:{
        type: String,
        required: true
    },
    telefonoComercial:{
        type: Number,
        required: true
    },
},{versionkey:false});

module.exports = mongoose.model('Proveedores', proveeddoreseSchema);