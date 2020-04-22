const programador = {
    nome: 'Michel',
    idade: '28',
    tecnologias: [
        {
            nome: 'Lua',
            especialidade: 'Desktop'
        },
        {
            nome: 'Javascript',
            especialidade: 'Desktop'
        }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)