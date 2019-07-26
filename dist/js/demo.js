"use strict";

$(window).scroll(function (e) {
  parallax();
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.hero').css('top', -(scrolled * 0.0315) + 'rem');
}

;