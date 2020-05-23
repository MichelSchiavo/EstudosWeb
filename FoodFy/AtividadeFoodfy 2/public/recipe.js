const toggle1 = document.querySelector('#btn1')
const toggle2 = document.querySelector('#btn2')
const toggle3 = document.querySelector('#btn3')
const alvo1 = document.querySelector('#recipeList')
const alvo2 = document.querySelector('#recipePreparation')
const alvo3 = document.querySelector('#recipeInformation')


toggle1.addEventListener('click', function() {
    if (alvo1.style.display == 'none') {
        alvo1.style.display = 'block' 
    } else {
        alvo1.style.display = 'none'
    }
})

toggle2.addEventListener('click', function() {
    if (alvo2.style.display == 'none') {
        alvo2.style.display = 'block' 
    } else {
        alvo2.style.display = 'none'
    }
})

toggle3.addEventListener('click', function() {
    if (alvo3.style.display == 'none') {
        alvo3.style.display = 'block' 
    } else {
        alvo3.style.display = 'none'
    }
})

alvo1.style.display = 'none'
alvo2.style.display = 'none'
alvo3.style.display = 'none'