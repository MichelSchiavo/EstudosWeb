const nome = "Maria"
const sexo = "F"
const idade = 85
const contribuicao = 45

if (sexo === 'F') {
    if(idade >= 85 && contribuicao >= 30) {
        console.log(`Olá ${nome}, vemos aqui que você pode se aposentar!`)
    } else {
        console.log(`Olá ${nome}, vemos que infelizmente você não pode se aposentar`)
    }
} else {
    if(idade >= 95 && contribuicao >= 35) {
        console.log(`Olá ${nome}, vemos aqui que você pode se aposentar!`)
    } else {
        console.log(`Olá ${nome}, vemos que infelizmente você não pode se aposentar`)
    }
}