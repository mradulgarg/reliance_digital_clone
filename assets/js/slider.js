$(document).ready(function () {
  $(".banner_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the autoplay speed as needed
    prevArrow: $(".prev-btn"),
    nextArrow: $(".next-btn"),
  });

  // Add click handlers for custom navigation buttons
  $(".prev-btn").on("click", function () {
    $(".banner_slider").slick("slickPrev");
  });

  $(".next-btn").on("click", function () {
    $(".banner_slider").slick("slickNext");
  });
});

$('.product_slider').slick({
    slidesToShow: 5,      // Display 5 products at a time
    slidesToScroll: 1,    // Slide 1 product at a time
    autoplay: true,
    autoplaySpeed: 2000,  // Adjust the autoplay speed as needed
    prevArrow: $('.prev-btn'),
    nextArrow: $('.next-btn')
  });

  // Add click handlers for custom navigation buttons
  $('.prev-btn').on('click', function(){
    $('.product_slider').slick('slickPrev');
  });

  $('.next-btn').on('click', function(){
    $('.product_slider').slick('slickNext');
  });
