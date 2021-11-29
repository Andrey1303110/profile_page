$(document).ready(function(){
    $('.photos').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        responsive: [
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
    $('.profile_sliders').slick({
        arrows: true,
        slidesToShow: 1,
        prevArrow: $('.arrows.left'),
        nextArrow: $('.arrows.right')
    });

    $('.play_audio').on('click', function() {
        let track_name = this.alt;
        $(track_name)[0].play();
        $(this).addClass('playing');
    })

    $(document).on("click", "img.edit", function(event) {
      let modal = $(this).attr("alt");
      $(modal).modal({
        escapeClose: false,
        clickClose: false,
        showClose: false,
        closeExisting: false
      });
      return false;
    });

    $(document).on("click", "a", function(event) {
      let modal = $(this).attr("href");
      $(modal).modal({
        escapeClose: false,
        clickClose: false,
        showClose: false,
        closeExisting: false
      });
      return false;
    });

    $('.elem_with_dropdown').on("click", function() {
      if ($(this).find('.drop-down').length) {
        $(this).find('.drop-down').slideToggle();
      }
      else {
        $(this).parent().find('.drop-down').slideToggle();
      }
    })

    $('.drop-down.main .dropdown').on("click", function() {
      $(this).parent().find('.drop-down').slideUp();
      $(this).find('.drop-down').slideToggle();
    })

    $('.button_add').on("click", function() {
      $(this).parent().find('.drop-down.main').slideToggle();
    })
});


