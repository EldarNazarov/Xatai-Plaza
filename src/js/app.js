'use strict';
import 'bootstrap/dist/js/bootstrap';
// import 'owl.carousel/dist/owl.carousel';
import 'slick-carousel/slick/slick';
import './carousel';

$(document).ready(function () {


$('.white_block a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});


function isElementInViewport(element) {
  if (typeof jQuery === 'function' && element instanceof jQuery) {
    element = element[0];
  }

  var rect = element.getBoundingClientRect();
  return (
    (rect.top < 0 && rect.bottom > 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top > 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


$(window).scroll(numberAnimation);


var viewed = false;


function numberAnimation() {
  
  if (isElementInViewport($(".number_wrapper")) && !viewed) {
    viewed = true;
    $('.num').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 1500,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }
}





});





