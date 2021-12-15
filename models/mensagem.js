const mongoose = require('mongoose');

const mensagemSchema = new mongoose.Schema({

    texto:{
        type:String,
        required: true
    },
    dono:{
        type:String,
        required: true
    },
    horario:{
        type:String,
        required: true
    },
    idchat:{
        type:String,
        required: true
    }
});

const mensagem = mongoose.model("mensagens",mensagemSchema);
module.exports = mensagem;