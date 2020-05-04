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
    const courseCardInfo = {
        courses: [
            { id: 'starter', title: 'Starter', img: 'https://skylab.rocketseat.com.br/static/64c237ccff807c054339a62d53b4b402.svg', modules: 'Torne-se um programador desejado em cinco módulos', price: 'Este curso é grátis'},
            { id: 'launchbase', title: 'Launchbase', img: 'https://skylab.rocketseat.com.br/static/0828532024cb46921a6b5e941f8d788d.svg', modules: 'Torne-se um programador desejado em cinco módulos', price: 'Este curso é pago'},
            { id: 'gostack', title: 'Gostack', img: 'https://skylab.rocketseat.com.br/static/83a178a0653dab1d55e2ed7946465975.svg', modules: 'Torne-se um programador desejado em cinco módulos', price: 'Este curso é pago'}
        ]
    }

    return res.render('content', { courses: courseCardInfo} )
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