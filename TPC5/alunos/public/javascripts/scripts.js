function apagaAluno(ident){
    console.log('Vou apagar o aluno: ' + ident)
    axios.delete('/alunos/' + ident)
    .then(response => window.location.assign('/alunos'))
    .catch(error => console.log(error))
}

function alunoNotas(ident){
    console.log('Vou apresentar as notas do aluno: ' + ident)
    axios.get('/alunos/' + ident)
    .then(response => window.location.assign('/alunos/' + ident ))
    .catch(error => console.log(error))
}

function apagaNota(aident,nident){
    console.log('Vou apagar a nota ' + nident + 'do aluno ' + aident)
    axios.delete('/alunos/' + aident + '/notas/' + nident)
    .then(response => window.location.assign('/alunos/' + aident ))
    .catch(error => console.log(error))
}