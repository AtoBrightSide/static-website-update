$('.carousel.carousel-slider').carousel({
    fullScreen: false,
    indicators: true,
    padding: 50,
});

autoplay();

function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4000);
}
// $(document).ready(function () {
//     $('.modal').modal();
// });
$('.modal').modal();
$('.sidenav').sidenav();
$('.parallax').parallax();