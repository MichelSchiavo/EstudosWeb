const usuarios = [
    {
        nome: 'Michel',
        tecnologias: [
            'html', 'css'
        ]
    },
    {
        nome: 'Caio',
        tecnologias: [
            'Java', 'Python'
        ]
    },
    {
        nome: 'Sofia',
        tecnologias: [
            'NodeJS', 'PhP', 'css'
        ]
    }
]

for (let usuario of usuarios) {//Cria uma variável que vai ler os dados de outra variável
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
}

function checarCss(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'css'){
            return true
        }
    }
    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const sabeCss = checarCss(usuarios[i])
    if (sabeCss) {
        console.log(`${usuarios[i].nome} sabe CSS, entre em contato com o mesmo para tirar dúvidas!`)
    }
}