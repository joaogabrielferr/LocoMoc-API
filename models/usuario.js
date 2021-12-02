const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({

    username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    nomecompleto:{
        type:String,
        required: true,
    },
    cnh:{
        type:String,
        required: true
    }

});

const usuario = mongoose.model("Usuario",usuarioSchema);
module.exports = usuario;