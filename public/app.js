/* globals $ */

$(document).ready(function () {
  var page = $('body').attr('id')
  if (page === 'home') {
    var $carousel = $('.carousel.carousel-slider')
    $carousel.carousel({fullWidth: true})
    // window.setInterval(function () {
    //  $('.carousel.carousel-slider').carousel('next')
    // }, 3000)
    $('nav a').on('mouseover', function () {
      var slidenum = this.getAttribute('data-slidenum')
      $carousel.carousel('set', slidenum)
    })
  } else if (page === 'about') {
    $('.parallax').parallax()
    $('.carousel').carousel()
  } else if (page === 'contact') {
    $('.parallax').parallax()
  } else if (page === 'blog') {
    $('.parallax').parallax()
  }
})
