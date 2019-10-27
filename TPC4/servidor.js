var http = require('http')
var fs = require('fs')



var myServer = http.createServer(function (req, res) {
    console.log(req.method + ' ' + req.url)

    if (req.method == 'GET') {

        var url = req.url.split('/')

        if (url[1] == 'musica') {

            if (url[2] == 'doc2html.xsl') {

                fs.readFile('doc2html.xsl', (error, data) => {
                    if (!error) {
                        res.writeHead(200, { 'Content.type': 'text/xsl' })
                        res.write(data)
                        res.end()
                    }
                    else {
                        res.end('Erro ao ler a styleSheet')
                    }
                })
            }

            else {

                fs.readFile(('data/doc' + url[2] + '.xml'), (error, data) => {
                    if (!error) {

                        res.writeHead(200, { 'Content.type': 'text/xml' })
                        res.write(data)
                        res.end()

                    }
                    else {
                        res.end('Erro ao ler a XML')
                    }
                })
            }
        }

        else {
        res.end('Pedido não suportado [' + req.url + ']')
    }
}else {
    res.end('Erro! Pedido não suportado [' + req.url + ']')
}
})

myServer.listen(3021);

console.log('Servidor à escuta na porta 3021...')