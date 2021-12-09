const dotenv = require("dotenv").config();
const express = require('express');
const rotas = require('./rotas/rotas');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');


app.use(express.json());
app.use(cors());


var fileupload = require('express-fileupload');

app.use(fileupload({
    useTempFiles: true
}));


mongoose.connect("mongodb+srv://usuario:senhalocomoc@locomoc.cuset.mongodb.net/locomoc?retryWrites=true&w=majority",{useNewUrlParser : true})
.then(()=>{
    
})
.catch(err=>{
    console.log("Erro ao conectar no banco de dados.");
});

const port = process.env.PORT || 3001;



app.use('/api',rotas);

app.listen(port);
