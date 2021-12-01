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

    $('.accordion .title').on("click", function() {
      $(this).parent().find('.accordion_content').slideToggle();
      $(this).parent().find('.subtitle').slideToggle();
    })


    $("form .select p").on("click", function () {
      $(this).next("ul.professionals").slideToggle();
      $(".owl-stage-outer").addClass("open");
    });
  
    $("ul.professionals>li").on("click", function () {
      $(this).find("ul.sub_professionals").slideToggle();
      $(this).toggleClass("open");
    });
  
    $(".sub_professionals li").on("click", function () {
      let selected = $(this).text();
      $(this).parents(".select").find(".selected_item").text(selected);
      $("ul.professionals").slideUp();
    });
  
    $(".select.one .sub_professionals li label input").on("click", function () {
      $(this).parents(".sub_professionals, .professionals").slideUp();
      let select_val_one = $(this).parent().text();
      $(".select.one .selected_item").text(select_val_one);
    });
    $(".select.multi .sub_professionals li label input").on("click", function () {
      $(this).parents(".sub_professionals, .professionals").slideUp();
      let select_val = $(this).attr("value");
      let select_item = $(this).parent().text();
      $(this)
        .parents(".select.multi")
        .next(".multi_selected_items")
        .append("<p class='selected' data-value=" + select_val + ">" + select_item + "<span></span></p>");
    });
    $(".multi_selected_items").on("click", ".selected span", function () {
      let select_val = $(this).parent(".selected").attr("data-value");
      $('.select.multi .sub_professionals input[value="' + select_val + '"]').prop("checked", false);
      $(this).parent().remove();

      set_skills();
    });
  
    function set_skills() {
      let skills = $('.skills_edit .multi_selected_items .selected');
      let all_skills = $('.featured-skills_block .inline');
      for (let j = 0; j < all_skills.length; j++) {
        all_skills[j].remove();
      }
      for (let i = 0; i < skills.length; i++) {
        $('.featured-skills_block .data_part').append(`<div class='inline'><p>${skills[i].innerHTML}</p></div>`);
      }
    }

    $('#about_edit textarea')[0].value = $('.about_block .data_part p')[0].textContent;

    $('#about_edit textarea').on('input', function(){
      $('.about_block .data_part p')[0].textContent = '';
      $('.about_block .data_part p')[0].textContent = $('#about_edit textarea')[0].value; 
    })
});
