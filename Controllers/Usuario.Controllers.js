const usuarioModel = require('../models/usuario');



const checkUsuario = async (req,res)=>{
    await usuarioModel.find({username:req.body.username,password:req.body.password},(err,results)=>{
        if(err)res.send("Erro.");
        else res.send(results);
    }).clone().catch(function(err){ console.log(err)});;
};

const checkUsername = async (req,res)=>{
    await usuarioModel.find({username:req.params.username},(err,results)=>{
        if(err)res.send("Erro");
        else res.send(results);
    }).clone().catch(function(err){ console.log(err)});
}

const criaUsuario = async(req,res)=>{

    try{
    let d = req.body;
    const usuario = new usuarioModel(
        {
            username:d.username,email:d.email,
            password:d.password,nomecompleto:d.nomecompleto,
            cnh:d.cnh
        }
    );

    await usuario.save();
    res.send("Usuario adicionado");

    }catch(err)
    {
        res.status(400).send("Erro");
    }
}


module.exports.checkUsuario = checkUsuario;
module.exports.criaUsuario = criaUsuario;
module.exports.checkUsername = checkUsername;