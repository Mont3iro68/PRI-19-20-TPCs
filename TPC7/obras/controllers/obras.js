var Obra = require('../models/obras')


module.exports.listar = () => {
    return Obra
        .find()
        .exec()
}



module.exports.listarPeriodo = (periodo) =>{
    return Obra
        .find({periodo: periodo})
        .exec()
}

module.exports.listarAno = (ano) =>{
    return Obra
        .find({anoCriacao: ano})
        .exec()
}

module.exports.listarNome = (nome) => {
    return Obra
        .find({compositor: nome})
        .exec()
}

module.exports.listarComp = () => {
    return Obra
        .aggregate([{$group: {_id: "$compositor" , numObras: {$sum: 1}}}, {$sort: {numObras: -1}}])
        .exec()
}

module.exports.obrasComp = (comp) => {
    return Obra
        .aggregate([{$match: {compositor: comp}} , {$group: {_id: "$compositor", obras: {$push: "$nome"} }}])
}