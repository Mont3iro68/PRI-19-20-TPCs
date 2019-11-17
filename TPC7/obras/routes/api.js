var express = require('express');
var router = express.Router();
var Obra = require('../controllers/obras')

/* GET home page. */
router.get('/obras', function(req, res) {
  if(req.query.periodo){
    Obra.listarPeriodo(req.query.periodo)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).json(erro))
  }
  else if (req.query.anoCriacao){
    Obra.listarAno(req.query.anoCriacao)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).json(erro))

  }else if (req.query.compositor){
    Obra.listarNome(req.query.compositor)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).json(erro))
  }
  else{
    Obra.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).json(erro))

  }
  
  
});

router.get('/compositores/:compositor', function(req,res){
  Obra.obrasComp(req.params.compositor)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).json(erro))
  
})

router.get('/compositores', function(req,res){
  Obra.listarComp()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).json(erro))
  
})



module.exports = router;
