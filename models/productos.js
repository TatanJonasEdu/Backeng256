const mongoose = require ('mongoose');

const productoseSchema = mongoose.Schema({

    nombreItem:{
        type: String,
        required: true
    },
    unidades:{
        type: Number,
        required: true
    },
    udm:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    iva:{
        type: String,
        required: true
    },
    valor:{
        type: Number,
        required: true
    },
},{versionkey:false});

module.exports = mongoose.model('Productos', productoseSchema);