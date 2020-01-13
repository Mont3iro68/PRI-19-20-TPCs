var express = require('express');
var router = express.Router();
var axios = require('axios')
var apiKey = "?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ"
var apiRoute = "http://clav-api.dglab.gov.pt/api"

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias'+apiKey)
    .then(dados => {
      res.render('index',{tipologias: dados.data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});

module.exports = router;
