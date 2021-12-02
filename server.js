const express = require('express');
const rotas = require('./rotas/rotas');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');



require('dotenv').config();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.DB_CONN,{useNewUrlParser : true});

const port = process.env.PORT || 3001;



app.use('/api',rotas);

app.listen(port);
