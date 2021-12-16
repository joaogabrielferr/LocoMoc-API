const anuncioModel = require('../models/anuncio');


var fileupload = require('express-fileupload');

// const dotenv = require('dotenv');
// dotenv.config();


const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "locomoc",
    api_key: "688544135474417",
    api_secret: "Mp0NGqlctydL83MFCPnkRXzq5bM",
    secure: true
});


const pegaTodosAnuncios = async (req,res)=>{
    try{
    const results = await anuncioModel.find().clone().catch(function(err){ console.log(err)});
    res.send(results);
    }catch(err)
    {
        res.status(400).send(err);
    }
}

const pegaAnunciosUsuario = async (req,res)=>{
    try{
        const results = await anuncioModel.find({username:req.params.username}).clone().catch(function(err){ console.log(err)});
        res.send(results);
    }catch(err)
    {
        res.status(400);send(err);
    }

}

const criaAnuncio = async (req,res)=>{

    try{
        let d = req.body;
        const anuncio = new anuncioModel({username:d.username,
        placa:d.placa,
        marca:d.marca,
        modelo:d.modelo,
        cambio:d.cambio,
        ano:d.ano,
    versao:d.versao,
    tipocombustivel:d.tipocombustivel,
    potenciamotor:d.potenciamotor,
    tipocarro:d.tipocarro,
    quilometragem:d.quilometragem,
    quantidadeportas:d.quantidadeportas,
    cor:d.cor,
    precoaluguel:d.precoaluguel,
    qtddias:d.qtddias,
    opcionais:d.opcionais,
    foto:d.foto,
    titulo:d.titulo,
    descricao:d.descricao,
    cidade:d.cidade,
    estado:d.estado,
    aberto:d.aberto});
        await anuncio.save();
        res.send("Anuncio adicionado");
    }catch(err)
    {
        res.status(400).send(err);
    }
}


const deletaAnuncio = async (req,res) =>{

    try{
        await anuncioModel.deleteOne({_id: req.body.id});
        res.send("anuncio deletado!");
    }catch(err)
    {
        res.status(400).send("erro");
    }
}

const attAnuncio = async (req,res) =>{

    try{
        let d = req.body;
        const anuncionovo = {

            "username":d.username,
            "placa":d.placa,
            "marca":d.marca,
            "modelo":d.modelo,
            "cambio":d.cambio,
            "ano":d.ano,
            "versao":d.versao,
            "tipocombustivel":d.tipocombustivel,
            "potenciamotor":d.potenciamotor,
            "tipocarro":d.tipocarro,
            "quilometragem":d.quilometragem,
            "quantidadeportas":d.quantidadeportas,
            "cor":d.cor,
            "precoaluguel":d.precoaluguel,
            "qtddias":d.qtddias,
            "opcionais":d.opcionais,
            "foto":d.foto,
            "titulo":d.titulo,
            "descricao":d.descricao,
            "cidade":d.cidade,
            "estado":d.estado,
            "aberto":d.aberto
        }

        await anuncioModel.updateOne({"_id":d.id},{$set:anuncionovo});
        res.status(200).send("Anuncio atualizado");

    }catch(err)
    {
        res.status(400).send(err);
    }
}

const abrefechaAnuncio = async (req,res)=>{

    try{
    const b = req.body.aberto;

    if(b === false)
    {
        await anuncioModel.updateOne({_id:req.body.id},{$set:{aberto:false}});
    }else
    {
        await anuncioModel.updateOne({_id:req.body.id},{$set:{aberto:true}});
    }
    res.status(200).send("Anuncio aberto ou fechado");
    }catch(err)
    {
        res.status(400).send(400);
    }
}



const salvaImagem = async (req,res)=>{
    try{
        console.log("teste");
        const file = req.files.foto;
        cloudinary.uploader.upload(file.tempFilePath,function(err,result){
            res.send(result.url);
        });

    }catch(err)
    {
        res.status(400).send(err);
    }
}

module.exports.pegaTodosAnuncios = pegaTodosAnuncios;
module.exports.pegaAnunciosUsuario = pegaAnunciosUsuario;
module.exports.criaAnuncio = criaAnuncio;
module.exports.salvaImagem = salvaImagem;
module.exports.deletaAnuncio = deletaAnuncio;
module.exports.attAnuncio = attAnuncio;
module.exports.abrefechaAnuncio = abrefechaAnuncio;