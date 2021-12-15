const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({

    locador:{
        type:String,
        required: true
    },
    locatario:{
        type:String,
        required: true
    },
    idanuncio:{
        type:String,
        required: true
    }

});

const chat = mongoose.model("chats",chatSchema);
module.exports = chat;