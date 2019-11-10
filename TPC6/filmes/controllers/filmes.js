var Filme = require('../models/filmes')
var mongoose = require('mongoose')

module.exports.listar = () => {
    return Filme
        .find()
        .exec()
}

module.exports.consultar = id => {
    return Filme
        .find({_id: id})
        .exec()
}

module.exports.contar = () => {
    return Filme
        .countDocuments()
        .exec()
}

module.exports.inserir = filme => {
    filme._id = mongoose.Types.ObjectId()
    console.log(filme)
    var novo = new Filme(filme)
    return novo.save()
}

module.exports.remover = id => {
    return Filme
        .deleteOne({_id: id})
}