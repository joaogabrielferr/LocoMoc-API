const express = require('express');
const router = express.Router();

const { check, validationResult,body} = require('express-validator');


const usuarioModel = require('../models/usuario');
const anuncioModel = require('../models/anuncio');

//Rotas da API

//verifica se existe um usuario com um dado username e dada senha
router.post('/usuario/check',[body('username').trim().escape(),body('email').trim().escape(),
body('password').trim().escape(),body('nomecompleto').trim().escape(),body('cnh').trim().escape()],async (req,res)=>{
    await usuarioModel.find({username:req.body.username,password:req.body.password},(err,results)=>{
        if(err)res.send("Nao existe nenhum usuário com esse username e senha.");
        else res.send(results);
    });
});

//retorna todos os anuncios
router.get('/anuncio', async (req,res)=>{
    try{
    const results = await anuncioModel.find();
    res.send(results);
    }catch(err)
    {
        res.status(400).send(err);
    }
});

//retorna todos os anuncios de um usuario
router.get("/anuncio/:username",async (req,res)=>{
    try{
        const results = await anuncioModel.find({username:req.params.username});
        res.send(results);
    }catch(err)
    {
        res.status(400);send(err);
    }

});

//cria um anuncio
router.post('/anuncio',[body('username').trim().escape(),body('placa').trim().escape(),
body('marca').trim().escape(),body('modelo').trim().escape(),body('cambio').trim().escape(),body('versao').trim().escape(),
body('tipocombustivel').trim().escape(),body('tipocarro').trim().escape(),body('cor').trim().escape(),
body('opcionais').trim().escape()],async (req,res)=>{

    try{
        let d = req.body;
        const anuncio = new anuncioModel({username:d.username,
        placa:d.placa,marca:d.marca,modelo:d.modelo,cambio:d.cambio,ano:d.ano,
    versao:d.versao,tipocombustivel:d.tipocombustivel,
    potenciamotor:d.potenciamotor,tipocarro:d.tipocarro,
    quilometragem:d.quilometragem,quantidadeportas:d.quantidadeportas,
    cor:d.cor,precoaluguel:d.precoaluguel,qtddias:d.qtddias,
    opcionais:d.opcionais});
        await anuncio.save();
        res.send("Anuncio adicionado");
    }catch(err)
    {
        res.status(400).send(err);
    }
});




module.exports = router;