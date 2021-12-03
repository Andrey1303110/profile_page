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
        let timer = setInterval(() => { 
          if ( ($(track_name)[0].currentTime % 60 != 0) || ($(track_name)[0].currentTime/60 < 1) ) {
            if ($(track_name)[0].currentTime <= 9) {
              $(this).parent().parent().find('.time_duration')[0].textContent = '0:0' + Math.round($(track_name)[0].currentTime)
            }
            else {
              $(this).parent().parent().find('.time_duration')[0].textContent = '0:' + Math.round($(track_name)[0].currentTime)
            }
          }
          if ( ($(track_name)[0].currentTime % 60 == 0) || ($(track_name)[0].currentTime/60 >= 1) ) {
            if ($(track_name)[0].currentTime <= 9) {
              $(this).parent().parent().find('.time_duration')[0].textContent = Math.round($(track_name)[0].currentTime/60) + ':0' + Math.round($(track_name)[0].currentTime)
            }
            else {
              $(this).parent().parent().find('.time_duration')[0].textContent = Math.round($(track_name)[0].currentTime/60) + ':' + (Math.round($(track_name)[0].currentTime)-60)
            }
          }
        }, 1000);
          
        setTimeout(() => { clearInterval(timer); }, $(track_name)[0].duration * 1000);
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
      //$(this).parent().find('.drop-down').slideUp();
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
    });

    $('.drop-down .section p').click(function(event){
      event.preventDefault();
      console.log(this);
    })

    $('#lead_finder input[type="submit"], #team_builder input[type="submit"], #skills_edit input[type="submit"]').click(function(){
      set_skills();
      set_services();
      set_people();
    })
  
    function set_skills() {
      let new_skills = $('.skills_edit .multi_selected_items .selected');
      let old_skills = $('.featured-skills_block .inline');
      for (let j = 0; j < old_skills.length; j++) {
        old_skills[j].remove();
      }
      for (let i = 0; i < new_skills.length; i++) {
        $('.featured-skills_block .data_part').append(`<div class='inline'><p>${new_skills[i].innerHTML}</p></div>`);
      }
    }

    function set_services() {
      let new_skills = $('#lead_finder .multi_selected_items .selected');
      let old_skills = $('.services_block .inline');
      for (let j = 0; j < old_skills.length; j++) {
        old_skills[j].remove();
      }
      for (let i = 0; i < new_skills.length; i++) {
        $('.services_block .data_part').append(`<div class='inline'><p>${new_skills[i].innerHTML}</p></div>`);
      }
    }

    function set_people() {
      let new_skills = $("#team_builder .multi_selected_items").eq(1).find('.selected');
      let old_skills = $('.people_need_block .inline');
      for (let j = 0; j < old_skills.length; j++) {
        old_skills[j].remove();
      }
      for (let i = 0; i < new_skills.length; i++) {
        $('.people_need_block .data_part').append(`<div class='inline'><p>${new_skills[i].innerHTML}</p></div>`);
      }
    }

    $('#about_edit textarea')[0].value = $('.about_block .data_part p')[0].textContent;

    $('#about_edit input.button').click(function(){
      $('.about_block .data_part p')[0].textContent = '';
      $('.about_block .data_part p')[0].textContent = $('#about_edit textarea')[0].value; 
    })

    /*for (let i = 0; i < $('.experience_block .experience_content').length; i++) {
      for (let j = 1; j < $('.experience_block .experience_content')[i].childElementCount; j++) {
        for (let z = 0; z < $('.experience_block .experience_content')[i].children[j].childElementCount; z++) {
          console.log($('.experience_block .experience_content')[i].children[j].children[z].textContent);
        }
      }
    }*/
    function set_song_titles() {
      let song_title_edit = $('#talent_edit .accordion .song_title');
      let song_title = $('.talent_block .interact_content .head p');
      for (let i = 0; i < song_title.length; i++) {
        song_title[i].textContent = song_title_edit[i].value;
      }
    }

    $('#talent_edit .accordion .song_title').on('input', set_song_titles());

    function set_experince_titles() {
      for (let i = 0; i < $('.company_name a').length; i++) {
        $('.company_name a')[i].textContent = $('.title_experince input')[i].value
        $('.company_name p')[i].textContent = $('.company_experince input')[i].value;
      }
    }

    $('.title_experince input').on('change', set_experince_titles);
    $('.company_experince input').on('change', set_experince_titles);

    function set_contacts_data() {
      for (let i = 0; i < $('#contact_info_edit_form input').length-1; i++) {
        $('#contact_info_edit ul li a')[i].textContent = $('#contact_info_edit_form input')[i].value;
      }
    }

    $('#contact_info_edit_form input').on('change', set_contacts_data);

    $('input[type="submit"]').click(function(event) {
      event.preventDefault();
      $(this)[0].nextElementSibling.click();
    });

    function set_profile_data() {
      for (let i = 0; i < $('.profile_name').length; i++ ) {
        $('.profile_name')[i].textContent = $('#edit_profile input')[1].value + ' ' + $('#edit_profile input')[2].value;
      }
      $('.top_p span')[0].textContent = $('#edit_profile input')[1].value;
      $('.bg_top').css('background-image', `url(${blah.src})`);
    }

    $('#change_picture input[type="submit"]').click(function(){
      $('.avatar')[1].src = $('#new_avatar')[0].src;
      $('.avatar')[2].src = $('#new_avatar')[0].src;
      $('.avatar')[16].src = $('#new_avatar')[0].src;
    })

    $('#edit_profile input.button').on('click', set_profile_data);

    $('.services_block .edit').click(function(){
      $("a[href='#lead_finder']")[0].click();
    })
    $('.people_need_block .edit').click(function(){
      $("a[href='#team_builder']")[0].click();
    })
  
    $('.add').click(function(){
      $(this).addClass('active');
      $(this).parent().parent().fadeOut(750, function() {$(this).remove()} );
      console.log($(this).parent().parent().parent()[0].childElementCount);
      if($(this).parent().parent().parent()[0].childElementCount <= 1) {
        $(this).parent().parent().parent().parent().fadeOut(750, function() {$(this).remove()} );
      }
    })

    var imgInp, blah;

    $(document).on("click", ".add_pic__pic_blc", function () {
      if ($(this).hasClass("add_pic__pic_blc")) {
        imgInp = $(this).find('input[type="file"]')[0];
        imgInp.click();
        blah = $(this).find("img")[0];
        upPic(imgInp, blah);
      } else {
        imgInp = $(this).parents(".add_pic__pic_blc").find('input[type="file"]')[0];
        imgInp.click();
        blah = $(this).parents(".add_pic__pic_blc").find("img")[0];
        upPic(imgInp, blah);
      }
    });
    function upPic(imgInp, blah) {
      imgInp.onchange = (evt) => {
        const [file] = imgInp.files;
        if (file) {
          blah.src = URL.createObjectURL(file);
        }
      };
    }

});
