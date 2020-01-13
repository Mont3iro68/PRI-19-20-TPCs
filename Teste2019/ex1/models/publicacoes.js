const mongoose = require('mongoose')

var publicacaoSchema = new mongoose.Schema({
    _id: String,
    type: String,
    id: String,
    authors: [String],
    title: String,
    booktitle: String,
    address: String,
    year: String,
    month: String,
    isbn: String, 
    doi: String
})

module.exports = mongoose.model('publicacoes', publicacaoSchema)