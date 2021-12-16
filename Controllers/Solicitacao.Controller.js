const solicitacaoModel = require('../models/solicitacao');



const enviaSolicitacao = async (req,res) =>{

    try{

        let d = req.body;

        const solicitacao = new solicitacaoModel({
            de:d.de,
            para:d.para,
            idanuncio:d.idanuncio,
            respondido:d.respondido,
            mensagem:d.mensagem
        });

        await solicitacao.save();
        res.send("Solicitacao criada");
    }catch(err)
    {
        res.status(400).send(err);
    }

}

const deletaSolicitacao = async (req,res)=>{

    try{

        await solicitacaoModel.deleteOne({_id:req.body.id});
        res.send("Solicitacao deletada");

    }catch(err)
    {
        res.status(400).send(err);
    }

}


const pegaSolicitacoesEnviadas = async (req,res) =>{

    try{

        const resultado = await solicitacaoModel.find({de:req.body.de}).clone().catch(function(err){ console.log(err)});
        res.send(resultado);
    }catch(err)
    {
        res.status(400).send(err);
    }
}

const pegaSolicitacoesRecebidas = async (req,res) =>{

    try{

        const resultado = await solicitacaoModel.find({para:req.body.para}).clone().catch(function(err){ console.log(err)});
        res.send(resultado);
    }catch(err)
    {
        res.status(400).send(err);
    }
}

const responder = async (req,res) =>{

    try{

    await solicitacaoModel.updateOne({"_id":req.body.id},{$set:{"respondido":true}});
    res.send("solicitacao atualizada");
    }catch(err)
    {
        res.status(400).send(err);
    }

}



module.exports.enviaSolicitacao = enviaSolicitacao;
module.exports.deletaSolicitacao = deletaSolicitacao;
module.exports.pegaSolicitacoesEnviadas = pegaSolicitacoesEnviadas;
module.exports.pegaSolicitacoesRecebidas = pegaSolicitacoesRecebidas;
module.exports.responder = responder;