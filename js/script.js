$(document).ready(function(){
  $('.headerBurger').click(function(event) {
    $('.headerBurger,.headerMenu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.slider').$(document).ready(function(){
    $('.headerBurger').click(function(event) {
      $('.headerBurger,.headerMenu').toggleClass('active');
      $('body').toggleClass('lock');
    });

    $('.slider').slick({
      dots: true,
      adaptiveHeight: true,
      initialSlide: 1,
      // autoplay: true,
      // autoplaySpeed: 5000

    });
  });
});
