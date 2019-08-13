$(document).ready(funtion() {
  $(".menu-toggle").on("click", function() {
    $(".nav").toggleclass("showing");
    $(".nav ul").toggleclass("showing");
  });
  $('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextarrow:$(".next");
  prevarrow:$(".prev");
});

});
