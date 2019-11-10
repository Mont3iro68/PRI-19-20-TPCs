var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET users listing. */



router.get('/inserir', function(req, res) {
  res.render('form-filme')
})



router.get('/', function(req, res) {
  axios.get('http://localhost:3006/api/filmes')
    .then( dados => {
      res.render('lista-filmes', {lista: dados.data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

router.get('/:idFilme', function(req, res) {
  axios.get('http://localhost:3006/api/filmes/' + req.params.idFilme)
    .then( dados => {
      res.render('filme', {filme: dados.data[0]})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})


/* POST */

router.post('/', function(req,res) {
  axios.post('http://localhost:3006/api/filmes', req.body)
    .then(dados => {
      res.redirect('/filmes/' + dados.data._id)
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

/* DELETE */

router.delete('/:idFilme', function(req,res){
  axios.delete('http://localhost:3006/api/filmes/' + req.params.idFilme)
    .then(dados => res.redirect(303,'/filmes'))
    .catch(erro => res.render('error', {error: erro}) )
} )

module.exports = router;
