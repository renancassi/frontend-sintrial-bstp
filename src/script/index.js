window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    var carousel = document.querySelector('.home #carouselExampleCaptions');
    var carouselPosition = carousel.offsetTop;

    if (window.scrollY > carouselPosition) {
        navbar.classList.add('fixed-top');
    } else {
        navbar.classList.remove('fixed-top');
    }
});