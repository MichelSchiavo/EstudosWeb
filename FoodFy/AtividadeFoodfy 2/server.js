const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const data = require('./data')

server.use(express.static('./public'))

server.set('view engine', 'njk')

nunjucks.configure('view', {
    express:server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req,res) {
    return res.render('home', { recipes: data } )
})

server.get('/about', function(req,res) {
    return res.render('about')
})

server.get('/recipes', function(req,res) {
    return res.render('recipes', { recipes: data } )
})

server.get("/recipe/:index", function (req, res) {
    const recipeIndex = req.params.index;

    return res.render('recipe', { item: data[recipeIndex], testando: 'cu' })
})

const porta = 5000
server.listen(porta, function() {
    console.log(`Server ligado na porta ${porta}`)
})