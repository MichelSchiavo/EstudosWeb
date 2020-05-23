const checkbox = document.getElementById('checkbox')
const bodyDarkAndLight = document.querySelector('body')

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        bodyDarkAndLight.classList.add('dark')        
        localStorage.setItem('checkboxFoodFy','checked')
    } else {
        bodyDarkAndLight.classList.remove('dark')
        localStorage.setItem('checkboxFoodFy','unchecked')
    }    
})

if (localStorage.getItem('checkboxFoodFy') === 'checked') {
    bodyDarkAndLight.classList.add('dark')
    checkbox.checked = true
}