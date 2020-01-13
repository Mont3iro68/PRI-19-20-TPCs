var Publicacao = require('../models/publicacoes')


module.exports.listar = () => {
    return Publicacao
        .find()
        .exec()
}

module.exports.listarPub = (id) => {
    return Publicacao
        .find({id: id})
        .exec()
}

module.exports.listarTypes = () => {
    return Publicacao
        .aggregate([{$group: {_id: "$type"}}])
        .exec()
}

module.exports.listarPubType = (type) => {
    return Publicacao
        .find({type: type})
        .exec()
}


module.exports.listarPubTypeYear = (type,year) => {
    return Publicacao
        .find({type: type, year:{$gt:year} })
        .exec()
}


module.exports.listarAutores = () => {
    return Publicacao
        .aggregate([{$unwind: '$authors'},{$group: {_id: "$authors"}}, {$sort:{_id: 1}}])
        .exec()
}

module.exports.listarPubAutor = (autor) => {
    return Publicacao
        .aggregate([{$unwind: '$authors'},{$match: {authors: autor }}, {$group: {_id: "$authors",publicacoes:{$push: "$title"}}}])
        .exec()
}

