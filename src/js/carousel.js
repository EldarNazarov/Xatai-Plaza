$(function(){

    $('.slider').slick({
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
              breakpoint: 767,
              settings: {
                  vertical: false,
                  verticalSwiping: false,
                  // slidesToShow: 3,
                  
              }
          },
      ]
      });



    //   $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     nav:true,
    //     dots: false,
        
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:1
    //         },
    //         1000:{
    //             items:1
    //         }
    //     }
    // });
});
