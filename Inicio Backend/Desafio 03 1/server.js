const express = require('express')//Chama a função que ativa o express
const nunjucks = require('nunjucks')//Chama a função que ativa o nunjucks

const server = express()//Serve para puxar informações do express

server.use(express.static('public'))//Serve para usar arquivos estáticos EX: CSS

server.set('view engine', 'njk')//Qual o motor de visualização

nunjucks.configure('view', {
    express: server
})//Configura o caminho do objeto que será visto


server.get('/', function(req, res) {
    return res.render('layout')
})

server.get('/content', function(req, res) {
    return res.render('content')
})

server.get('/about', function(req, res) {
    return res.render('about')
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function() {
    console.log('Server is running')
})