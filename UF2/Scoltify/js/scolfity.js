let sprites = document.querySelectorAll(".sprite");

sprites.forEach(function(sprite) {
    sprite.addEventListener('click', toggleSprite);

    function toggleSprite(e) {
        var sprite = e.target;

        if (sprite.classList.contains('sprite-1')) {
            sprite.classList.remove('sprite-1');
            sprite.classList.add('sprite-2');

        } else {
            sprite.classList.add('sprite-1');
            sprite.classList.remove('sprite-2');
        }
    }
})