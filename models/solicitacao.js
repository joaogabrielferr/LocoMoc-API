const mongoose = require('mongoose');

const solicitacaoSchema = new mongoose.Schema({

    de:{
        type:String,
        required: true
    },
    para:{
        type:String,
        required: true
    },
    idanuncio:{
        type: String,
        required: true
    },
    respondido:{
        type:Boolean,
        required: true,
    },
    mensagem:{
        type:String,
        required: true
    }

});

const solicitacao = mongoose.model("Solicitacoes",solicitacaoSchema);
module.exports = solicitacao;