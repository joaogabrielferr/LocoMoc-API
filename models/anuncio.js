const mongoose = require('mongoose');

const anuncioSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    placa:{
        type:String,
        required: true
    },
    marca:{
        type:String,
        required: true,
    },
    modelo:{
        type:String,
        required:true
    },
    cambio:{
        type:String,
        required:true
    },
    ano:{
        type:Number,
        required:true
    },
    versao:{
        type:String,
        required:true
    },
    tipocombustivel:{
        type:String,
        required:true
    },
    potenciamotor:{
        type:Number,
        required:true
    },
    tipocarro:{
        type:String,
        required:true
    },
    quilometragem:{
        type:Number,
        required:true
    },
    quantidadeportas:{
        type:Number,
        required:true
    },
    cor:{
        type:String,
        required:true
    },
    precoaluguel:{
        type:Number,
        required:true
    },
    qtddias:{
        type:Number,
        required:true
    },
    opcionais:{
        type:String,
        required:true
    },
    foto:{
        type:String,
    },
    titulo:{
        type:String,
        required:true
    },
    descricao:{
        type:String,
        required:true
    },
    cidade:{
        type:String,
        required:true,
    },
    estado:{
        type:String,
        required:true,
    },
    aberto:{
        type:Boolean,
        required:true
    }
});

const anuncio = mongoose.model("Anuncio",anuncioSchema);
module.exports = anuncio;