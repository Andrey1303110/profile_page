$(document).ready(function(){
    $('.photos').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        rows: 2,
        responsive: [
        {
          breakpoint: 478,
          settings: {
            slidesPerRow: 1,
            rows: 1,
          }
        }
      ]
    });
});


