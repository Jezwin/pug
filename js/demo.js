$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.hero').css('top',+(scrolled*0.0315)+'rem');

};
$('body').click(function(event){
  if ($('.navbar').find(event.target).length === 0){
    $(".navbar > .navbar-collapse").removeClass("show");
  }
});

// //- Opening accordion based on URL
// var url = document.location.toString();
// if ( url.match('#') ) {
//     $('#'+url.split('#')[1]).addClass('show');
// }


// //- Collapse on Hover
// $(".card-header").parent('.card').hover(
//   function() {
//     $(this).children('.collapse').addClass('show');
//   }, function() {
//     $(this).children('.collapse').collapse('hide');
//   }
// );