const chatModel = require("../models/chat");


const criaChat = async (req,res) =>{

    try{

        let d = req.body;

        const chat = new chatModel(
            {
                locador:d.locador,
                locatario:d.locatario,
                idanuncio:d.idanuncio

            }
        );
        
        await chat.save();
        res.send("Chat criado");

    }catch(err)
    {
        res.status(400).send(err);
    }

}

const pegaChats = async (req,res) =>{


    try{

        const resultado = await chatModel.find().or({ $or: [ {locador:req.body.locador},{locatario:req.body.locatario}  ]  }).clone().catch(function(err){ console.log(err)});
        res.send(resultado);
    }catch(err)
    {
        res.status(400).send(err);
    }

}



module.exports.criaChat = criaChat;
module.exports.pegaChats = pegaChats;