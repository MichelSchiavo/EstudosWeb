const express = require('express')//Chama a função que ativa o express
const nunjucks = require('nunjucks')//Chama a função que ativa o nunjucks

const server = express()//Serve para puxar informações do express
const coursesInfo = require('./data')

server.use(express.static('./public'))//Serve para usar arquivos estáticos EX: CSS

server.set('view engine', 'njk')//Qual o motor de visualização

nunjucks.configure('view', {
    express: server,
    autoescape: false,//Permite imprimir elementos html em variáveis, provindo do nunjucks e bem útil
    noCache: true
})//Configura o caminho do objeto que será visto


server.get('/', function(req, res) {
    return res.render('layout')
})

server.get('/content', function(req, res) {
    return res.render('content', { courses: coursesInfo} )
})

server.get('/about', function(req, res) {
    return res.render('about')
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;//Pega o id do parâmetro

    const course = coursesInfo.find(function(course) { //Procurando dentro de um array chamado coursesInfo
        return course.select == id//Retorna o valor comparativo entra o course.select com o do id
    })

    if(!course) {
        return res.status(404).render("not-found")//Retorna este texto quando não bater com a ID
    }

    return res.render('course', { item: course }) // Aqui deveria ser o teu course no lugar de curso
  
    //return res.send(`O id fornecido na rota é: ${id}`);
  })

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function() {
    console.log('Server is running')
})