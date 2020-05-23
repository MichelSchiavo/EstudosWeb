const cards = document.querySelectorAll('.card');

for (let i = 0, valor = cards.length; i < valor; i++) {
    (function(index) {
        cards[i].onclick = function() {
            window.location.href = `/recipe/${index}`
        };
    })(i);
}