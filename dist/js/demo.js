"use strict";

$(window).scroll(function (e) {
  parallax();
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.jumbotron__parallax').css('top', +(scrolled * 0.0315) + 'rem');
}

;
$('body').click(function (event) {
  if ($('.navbar').find(event.target).length === 0) {
    $(".navbar > .navbar-collapse").removeClass("show");
  }
}); //- Opening accordion based on URL

var url = document.location.toString();

if (url.match('#')) {
  var hash = url.split('#')[1]; // collapse the expanded panel

  $('.btn.btn-link').addClass('collapsed');
  $('.collapse').removeClass('show'); // expand the requested panel

  $('#' + hash).addClass('show');
  $('[data-target="#' + hash + '"]').removeClass('collapsed');
} // //- Collapse on Hover
// $(".card-header").parent('.card').hover(
//   function() {
//     $(this).children('.collapse').addClass('show');
//   }, function() {
//     $(this).children('.collapse').collapse('hide');
//   }
// );