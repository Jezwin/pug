"use strict";

$(window).scroll(function (e) {
  parallax();
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.hero').css('top', +(scrolled * 0.0315) + 'rem');
}

;
$('body').click(function (event) {
  if ($('.navbar').find(event.target).length === 0) {
    $(".navbar > .navbar-collapse").removeClass("show");
  }
});