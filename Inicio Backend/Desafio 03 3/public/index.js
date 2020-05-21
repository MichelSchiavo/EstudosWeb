const cards = document.querySelectorAll('.card');

for (let i = 0, fon = cards.length; i < fon; i++) {
    (function(index) {

        /*cards[i].addEventListener('mouseover', function() {
            console.log(index)
        })*/

        cards[i].onclick = function() {
            window.location.href = `/courses/${index}`
        };
    })(i);
}