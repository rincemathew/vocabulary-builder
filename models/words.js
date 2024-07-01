const mongoose = require('mongoose')

const wordsSchema = mongoose.Schema({
    word:{
        type:String,
        required:true,
    },
    meaning:{
        type:String,
        required:true,
    },
    pronunciation:{
        type:String,
    },
    levels:{
        type:String,
    },
    example:{
        type:String,
    },
    extra:{
        type:String,
    },
})

module.exports = mongoose.model('words',wordsSchema)