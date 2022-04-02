// FOR PRELOADER

$(document).ready(function () {
    $(".wrapper").delay(3000).fadeOut("slow");
});

(window).load(function () {
    $('.wrapper').hide();
    $('html, body').css('visibility', 'visible');
});




















