const express = require('express');
const router = express.Router();

const { check, validationResult,body} = require('express-validator');


const anuncioController = require('../Controllers/Anuncio.Controller');
const usuarioController = require('../Controllers/Usuario.Controllers');
const solicitacaoController = require('../Controllers/Solicitacao.Controller');
const chatController = require("../Controllers/Chat.Controller");
const mensagemController = require("../Controllers/Mensagem.Controller");

const usuarioModel = require('../models/usuario');
const anuncioModel = require('../models/anuncio');
const solicitacaoModel = require('../models/solicitacao');
const chatModel = require("../models/chat");
const mensagemModel = require("../models/mensagem");


//Rotas da API

//verifica se existe um usuario com um dado username e dada senha
router.post('/usuario/check',[body('username').trim().escape(),
body('password').trim().escape()],usuarioController.checkUsuario);

//verifica se existe um usuario com um dado username(usado no momento do cadastro para verificar
//a disponibilidade do username)
router.get("/usuario/:username",usuarioController.checkUsername);

//rota para criar um usuario
router.post("/usuario",[body('username').trim().escape(),
body('email').trim().escape(),body('password').trim().escape(),
body('nomecompleto').trim().escape(),body('cnh').trim().escape()],
usuarioController.criaUsuario);




//retorna todos os anuncios
router.get('/anuncio', anuncioController.pegaTodosAnuncios);

//retorna todos os anuncios de um usuario
router.get("/anuncio/:username",anuncioController.pegaAnunciosUsuario);


//cria um anuncio
router.post('/anuncio',[body('username').trim().escape(),body('placa').trim().escape(),
body('marca').trim().escape(),body('modelo').trim().escape(),body('cambio').trim().escape(),body('versao').trim().escape(),
body('tipocombustivel').trim().escape(),body('tipocarro').trim().escape(),body('cor').trim().escape(),
body('opcionais').trim().escape(),body('titulo').trim().escape(),body('descricao').trim().escape()],
anuncioController.criaAnuncio);


//deleta um anuncio
router.delete("/anuncio",anuncioController.deletaAnuncio);

//att um anuncio
router.put("/anuncio",anuncioController.attAnuncio);

//abre ou fecha anuncio

router.put("/anuncio/abre",anuncioController.abrefechaAnuncio);


//salva uma imagem na nuvem utilizando o serviço cloudinary
router.post('/anuncio/imagem',anuncioController.salvaImagem);


router.post('/solicitacao',solicitacaoController.enviaSolicitacao);

router.delete('/solicitacao',solicitacaoController.deletaSolicitacao);

router.post('/solicitacao/enviadas',solicitacaoController.pegaSolicitacoesEnviadas);

router.post('/solicitacao/recebidas',solicitacaoController.pegaSolicitacoesRecebidas);


router.post("/chat",chatController.criaChat);

router.post("/chat/todos",chatController.pegaChats);

router.post("/mensagem",mensagemController.criaMensagem);

router.post("/mensagem/todos",mensagemController.pegaMensagens);

module.exports = router;