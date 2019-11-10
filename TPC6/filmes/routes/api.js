var express = require('express');
var router = express.Router();

var Filmes = require('../controllers/filmes')

/* GET users listing. */
router.get('/filmes', function(req, res) {
    Filmes.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});


router.get('/filmes/:idFilme', function(req,res){
    Filmes.consultar(req.params.idFilme)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

/* POST */

router.post('/filmes', function(req,res){
    Filmes.inserir(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

/* DELETE */

router.delete('/filmes/:idFilme', function(req,res){
    Filmes.remover(req.params.idFilme)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;
