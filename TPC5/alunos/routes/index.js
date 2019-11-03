var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var nanoid = require('nanoid')

var myDB = __dirname + "/../data/alunos.json"

/* GET home page. */
router.get('/alunos', function(req, res) {
  jsonfile.readFile(myDB,(erro, alunos) =>{
    if(!erro){
      res.render('index', { title: 'Lista de Alunos', alunos:alunos });
    }
    else {
      res.render('error', {error: erro}) 
    }
  })
});

router.get('/', function(req, res) {
  jsonfile.readFile(myDB,(erro, alunos) =>{
    if(!erro){
      res.render('index', { title: 'Lista de Alunos', alunos:alunos });
    }
    else {
      res.render('error', {error: erro}) 
    }
  })
});

router.get('/alunos/:idAluno', function(req,res){
  var id = req.params.idAluno
  jsonfile.readFile(myDB,(erro,alunos)=>{
    if(!erro){
      var al = alunos.find(a => a.id == id)
      if (al != null){
        res.render('aluno', {title: 'Informação de Aluno', aluno: al})
      }
    }
    else res.render('error', {error: erro})
  })
})

router.post('/alunos',function(req,res){
  var registo = req.body
  registo['id'] = nanoid()
  jsonfile.readFile(myDB,(erro,alunos) => {
    if(!erro){
      registo['notas'] = []
      alunos.push(registo)
      jsonfile.writeFile(myDB,alunos,erro => {
        if (erro) console.log(erro)
        else console.log('Registo gravado com sucesso!')
      })
    }
     res.render('index', {title:'Lista de Alunos', alunos: alunos})
  })
})

router.post('/alunos/:idAluno/notas',function(req,res){
  var id = req.params.idAluno
  var registo = req.body
  jsonfile.readFile(myDB,(erro,alunos) => {
    if(!erro){
      var index = alunos.findIndex(a => a.id == id)
      if(index > -1){
        alunos[index].notas.push(registo)
        jsonfile.writeFile(myDB,alunos,erro =>{
          if (erro) console.log(erro)
          else console.log('Registo gravado com sucesso!')

        })
      }
    }
    res.render('aluno', {title:'Informação de aluno', aluno: alunos[index]})
  })
})


router.delete('/alunos/:idAluno', function(req,res){
  var id = req.params.idAluno
  jsonfile.readFile(myDB, (erro,alunos) => {
    if(!erro){
      var index = alunos.findIndex(a => a.id == id)
      if (index > -1){
        alunos.splice(index,1)
        jsonfile.writeFile(myDB,alunos,erro =>{
          if (erro) console.log(erro)
          else console.log('Registo removido com sucesso!')
        })
      }
    }
    res.render('index', {title:'Lista de Alunos', alunos: alunos})
  })
})

router.delete('/alunos/:idAluno/notas/:indicador', function(req,res){
  var idA = req.params.idAluno
  var idN = req.params.indicador
  jsonfile.readFile(myDB,(erro,alunos) => {
    if(!erro){
      var indexA = alunos.findIndex(a => a.id == idA)
      if (indexA > -1 ){
        var indexN = alunos[indexA].notas.findIndex(n => n.indicador == idN)
        if(indexN > -1){
          alunos[indexA].notas.splice(indexN,1)
          jsonfile.writeFile(myDB,alunos,erro => {
            if (erro) console.log(erro)
            else console.log('Nota removida com sucesso')
          })
        }
      }
    }
    res.render('aluno', {title:'Informação de Aluno', aluno: alunos[indexA]})
  })
})


module.exports = router;
