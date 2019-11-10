function verFilme(ident){
    axios.get('/filmes/' + ident)
        .then (response => window.location.assign('/filmes/' + ident ))
        .catch (erro => console.log(erro))
}

function apagarFilme(ident){
    axios.delete('/filmes/' + ident)
        .then (response => window.location = response.request.responseURL)
        .catch(erro => console.log(erro))
}


$(document).ready(function() {
    $("#add").click(function(e) {
        e.preventDefault()
        $(this).parent().parent().find("#cast").append('<div class="w3-container w3-threequarter"><label><b>Nome:</b></label><input class="w3-input w3-margin-bottom" type="text" name="cast"></div><div class="w3-container w3-quarter"><a class="w3-button w3-section w3-red w3-xlarge add" id="remove">x</a></div>')
    })

    $("#addg").click(function(e) {
        e.preventDefault()
        $(this).parent().parent().find("#genres").append('<div class="w3-container w3-threequarter"><label><b>Genero:</b></label><input class="w3-input w3-margin-bottom" type="text" name="genres"></div><div class="w3-container w3-quarter"><a class="w3-button w3-section w3-red w3-xlarge add" id="remove">x</a></div>')

    })

    $("#cast").on("click","#remove",function(){
        $(this).parent().prev().remove()
        $(this).parent().remove()
    })

    $("#send").click(e =>{
        e.preventDefault()

        var form = $('form').serializeArray()
        filme = objectify(form)
        if(filme){
            axios.post('/filmes', filme)
                .then(response => window.location = response.request.responseURL)
                .catch(erro => console.log(erro))
        }

    
 
       
    })

    $('<p id="temp">Preencha os campos!</p>').hide().appendTo("#send")


})

function objectify(form){
    var filme = {}
    var cast = []
    var genres = []
    for(x of form){
        if(!x.value){
            $("#temp").show(500).delay(2000).hide(1000)
            return null
        } 
        filme[x.name] = x.value
        if (x.name == "cast"){
            cast.push(x.value)
        }
        if(x.name == "genres"){
            genres.push(x.value)
        }
                
    }
    filme['cast'] = cast
    filme['genres'] = genres
    
    return filme
        
}