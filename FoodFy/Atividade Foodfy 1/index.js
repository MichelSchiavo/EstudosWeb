const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for(let card of cards) {
    card.addEventListener("click", function() {
        const title = card.querySelector(".imgTitle").innerHTML
        const author = card.querySelector(".imgOwner").innerHTML
        const imgId = card.getAttribute("id")

        modalOverlay.classList.add("active")
        modalOverlay.querySelector("img").src = `./imgs/${imgId}.png`

        modalOverlay.querySelector(".modal-title").innerHTML = title
        modalOverlay.querySelector(".modal-author").innerHTML = author
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})