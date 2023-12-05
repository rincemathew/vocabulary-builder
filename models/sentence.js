const mongoose = require('mongoose')

const sentenceSchema = mongoose.Schema({
    sentence:{
        type:String,
        required:true,
    },
    extra:{
        type:String,
    },
})

module.exports = mongoose.model('sentences',sentenceSchema)