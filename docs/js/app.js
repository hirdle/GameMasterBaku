$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .nav').toggleClass('active');
    });
});

$(document).on("click", "nav a", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top; // получаем координаты блока
    $('.header_burger, .nav').removeClass('active');
    $('body, html').animate({scrollTop: top - 60}, 1000); // плавно переходим к блоку
});