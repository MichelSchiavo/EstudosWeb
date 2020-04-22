const nome = "Michel"
const peso = 82
const altura = 1.86

const imc = valor = peso / (altura * altura)

if (imc >= 30) {
    console.log(`Você está acima do peso!`)
} else {
    console.log(`Você não está acima do peso!`)
}