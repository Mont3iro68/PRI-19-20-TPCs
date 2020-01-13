var express = require('express');
var router = express.Router();
var Publicacao = require('../controllers/publicacoes')

/* GET home page. */
router.get('/pubs', function (req, res, next) {
  if (req.query.type && req.query.year) {
    Publicacao.listarPubTypeYear(req.query.type, req.query.year)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).json(erro))
  } else if (req.query.type) {
    Publicacao.listarPubType(req.query.type)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).json(erro))
  } else if (req.query.autor) {
    Publicacao.listarPubAutor(req.query.autor)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).json(erro))
  } else{
    Publicacao.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).json(erro))
}



})


router.get('/pubs/:idPub', function (req, res, next) {
  Publicacao.listarPub(req.params.idPub)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).json(erro))
})

router.get('/types', function (req, res, next) {
  Publicacao.listarTypes()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).json(erro))
})

router.get('/autores', function (req, res, next) {
  Publicacao.listarAutores()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).json(erro))
})

module.exports = router;
