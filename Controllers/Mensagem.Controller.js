const mensagemModel = require("../models/mensagem");

const criaMensagem = async (req,res) =>{

    try{
        let d = req.body;
        const mensagem = new mensagemModel(
            {
                texto:d.texto,
                dono:d.dono,
                horario:d.horario
            }
        );
        
        await mensagem.save();

        res.send("Mensagem criada");


    }catch(err)
    {
        res.status(400).send(err);
    }

}

const pegaMensagens = async (req,res) =>{

    try{

        const resultado = await mensagemModel.find({dono:req.body.dono}).clone().catch(function(err){ console.log(err)});
        res.send(resultado);
    }catch(err)
    {
        res.status(400).send(err);
    }

}


module.exports.criaMensagem = criaMensagem;
module.exports.pegaMensagens = pegaMensagens;