
$(document).ready(function(){
  // ------------------- LANGUAGE CHANGE -------------------- //
  // -------------------------------------------------------- //

  $(".flag").on('click', function(event){
    event.stopPropagation();
    $('.conteiner_flags').prepend($(this));
  });


  $(".conteiner_language").on('click', function(event){
    event.stopPropagation();
    $(".poligons").addClass("poligons_rotate");
    $(".conteiner_flags").addClass("conteiner_flag_active");
  });

  $(".conteiner_language").on('mouseover', function(event){
    event.stopPropagation();
    $(".poligons").addClass("poligons_rotate");
    $(".conteiner_flags").addClass("conteiner_flag_active");
  });

  $(".conteiner_language").on('mouseout', function(event){
    event.stopPropagation();
    $(".poligons").removeClass("poligons_rotate");
    $(".conteiner_flags").removeClass("conteiner_flag_active");
  });




  // ------------------- DROPDOWN LIST -------------------- //
  // ------------------------------------------------------ //
  var slideTime = 300;
    $('.conteiner_dropdown_list').click(function(event){
      $('.input_transport_sort').css({'background' : '#fff'});
      var ul_transportBlock = $(this).parent().find('.ul_transport');
      if( ul_transportBlock.is(':hidden') ) {
        ul_transportBlock.slideDown(slideTime);
        $('.ul_transport').find('li').click(function(){
          var selectResult = $(this).html();
          $(this).parent().parent().find('input').val(selectResult);
          ul_transportBlock.slideUp(slideTime);
        });
      } else {
        ul_transportBlock.slideUp(slideTime);
      }
      return false;
    });

    $('body').on('click', function(e){
      var ul_transportBlock = $('.conteiner_dropdown_list').parent().find('.ul_transport');
      if(e.target !== $('.conteiner_dropdown_list') && e.target !== $('.conteiner_dropdown_list *') ){
        ul_transportBlock.hide();
        $('.input_transport_sort').css({'background' : 'transparent'});
      }
    })





  $('.conteiner_dropdown_list_header').click(function(event){
    event.stopPropagation();
    let headerDropListTop = this.getBoundingClientRect().top;
    let heightItputHeader = $('#input_transport_header').outerHeight();
    let heightUlHeight = $(this).find('li').outerHeight() * $(this).find('li').length;
    let sumHeight = headerDropListTop + heightItputHeader +  heightUlHeight;
    $(this).addClass('conteiner_dropdown_list_header_focus');

    if(sumHeight > document.documentElement.clientHeight){
      $(this).children('input').removeClass('dropdown_input_down_active').toggleClass('dropdown_input_up_active');
      $(this).find('.ul_transport_header').removeClass('ul_transport_down').removeClass('ul_transport_down_active')
      $(this).find('.ul_transport_header').addClass('ul_transport_up').toggleClass('ul_transport_up_active')
    }
    else{
      $(this).children('input').removeClass('dropdown_input_up_active').toggleClass('dropdown_input_down_active');
      $(this).find('.ul_transport_header').removeClass('ul_transport_up').removeClass('ul_transport_up_active')
      $(this).find('.ul_transport_header').addClass('ul_transport_down').toggleClass('ul_transport_down_active')
    }


    var ul_transport_header = $(this).parent().find('.ul_transport_header');

      $('.ul_transport_header').find('li').click(function(){
        var selectResult = $(this).html();
        $(this).parent().parent().find('input').val(selectResult);
        $(this).children('input').removeClass('dropdown_input_up_active').removeClass('dropdown_input_down_active');
        $(this).find('.ul_transport_header').removeClass('ul_transport_up').removeClass('ul_transport_up_active')
        $(this).find('.ul_transport_header').removeClass('ul_transport_down').removeClass('ul_transport_down_active')
      });
  })



  // ------------------- MODAL WINDOW -------------------- //
  // ----------------------------------------------------- //
  // function activeModal(event){
  $('.active_modal').on('click', function(event){
    event.stopPropagation();
    $('.section_modal_calculation').css({'display' : 'block'});
    $('.conteiner_left_block ').css({'height' : $('.conteiner_left_block ').outerHeight() + "px"})
    $('.conteiner_right_block ').css({'height' : $('.conteiner_right_block ').outerHeight() + "px"})
  });


  $('.conteiner_modal_calculation').on('click', function(event){
    event.stopPropagation();
  });
  $('.section_modal_calculation').on('click', function(){
    $('.section_modal_calculation').css({'display' : 'none'});
  });


  $('#modal_btn').click(function(){
    $('.content_left_block').empty();
    $('.conteiner_left_block').css({'padding' : '100px 70px'});
    $('.content_left_block').html('<h2 class="conteiner_left_block_h2">Спасибо! Ваша заявка принята.</h2>');

    $('.content_right_block form').empty();
    $('.content_right_block').css({'padding' : '100px 70px'});
    $('.content_right_block form').html('<h2 class="content_right_block_h2">Менеджер уже приступил к расчету стоимости Вашей поездки!</h2>');
  });

  // ------------------- CHANGE IMAGE  -------------------- //
  // ----------------------------------------------------- //

  $('.conteiner_img_card img').hover(function(){
    let lastSrcImg = $(this).attr('src');
    let newSrcImg = this.dataset.img;
    let patternSrc = 'pic/econom_auto/minivans/hover.jpg';

    if(newSrcImg == ""){
      newSrcImg = patternSrc;
    }

    if(lastSrcImg != newSrcImg){
      var c = lastSrcImg;
      lastSrcImg = newSrcImg;
      newSrcImg = c;
    }

    $(this).attr('src', lastSrcImg);
    this.dataset.img = newSrcImg;


    // markers
    var lastChild = $(this).parent().children('.conteiner_markers_foto').children()[1];
    var firstChild = $(this).parent().children('.conteiner_markers_foto').children()[0];
    $(firstChild).toggleClass('bg_mark');
    $(lastChild).toggleClass('bg_mark');

  });

  $('.conteiner_img_card img').click(function(){
    let lastSrcImg = $(this).attr('src');
    let newSrcImg = this.dataset.img;
    let patternSrc = 'pic/econom_auto/minivans/hover.jpg';

    if(newSrcImg == ""){
      newSrcImg = patternSrc;
    }

    if(lastSrcImg != newSrcImg){
      var c = lastSrcImg;
      lastSrcImg = newSrcImg;
      newSrcImg = c;
    }

    $(this).attr('src', lastSrcImg);
    this.dataset.img = newSrcImg;

    var lastChild = $(this).parent().children('.conteiner_markers_foto').children()[1];
    var firstChild = $(this).parent().children('.conteiner_markers_foto').children()[0];
    $(firstChild).toggleClass('bg_mark');
    $(lastChild).toggleClass('bg_mark');
  });


  // ------------------- INSTALL CLASS AUTO -------------------- //
  // ----------------------------------------------------------- //
  $('#Economy').click(function(){
    $('.section_transport').css({'background' : '#DFE4E9'});
    $('#age_transport').html("Автобусы&nbsp;от&nbsp;2006&nbsp;до&nbsp;2015&nbsp;года");
    $('.conteiner_all_lux_auto').css({'display' : 'none'});
    $('.conteiner_all_econom_auto').css({'display' : 'block'});
  });
  $('#Luxury').click(function(){
    $('.section_transport').css({'background' : '#E9E8DF'});
    $('#age_transport').html("Автобусы от 2015 до 2019 года");
    $('.conteiner_all_econom_auto').css({'display' : 'none'});
    $('.conteiner_all_lux_auto').css({'display' : 'block'});
  });

  // ------------------- UPPER SLIDER  ------------------------------ //
  // ---------------------------------------------------------------- //

  $(".content_slider").css({'width' : ( $('.slide_map').outerWidth(true) * $('.content_slider').children().length  ) + 'px'});

  var widthConteinerSlider = $(".conteiner_slider_1").outerWidth(), //  width of the slider
  widthSlider = $('.slide_map').outerWidth(true) * $('.content_slider').children().length,  //  the width of the slider container
  slid = $('.slide_map').outerWidth(true);
  var widthOffset = widthSlider - widthConteinerSlider; // allowable left shift
  var offsetLeft = 0; //  shift in left position
  var viewPercentage = widthSlider * (1 / 3); //  width constant for marker button


  function checkVeloffset(){
    if(offsetLeft < 0) $('.slider_left_btn').css({'visibility' : 'visible', 'opacity' : '1'});
    if(offsetLeft == -widthOffset) $('.slider_right_btn').css({'visibility' : 'hidden', 'opacity' : '0'});
    if(offsetLeft > -widthOffset) $('.slider_right_btn').css({'visibility' : 'visible', 'opacity' : '1'});
    if(offsetLeft == 0) $('.slider_left_btn').css({'visibility' : 'hidden', 'opacity' : '0'});
  }

  // ------------------- auto background markers -------------------- //
  function markersUpperSlider(){

    let offsetLeftAbs = Math.abs(offsetLeft);
    $('.marker_block').removeClass('active_marker_block');

    if (offsetLeftAbs <= viewPercentage) {
      $('#marker_block_1').addClass('active_marker_block');
    }
    else if ((offsetLeftAbs > viewPercentage) && (offsetLeftAbs < (viewPercentage * 2))) {
      $('#marker_block_2').addClass('active_marker_block');
    }
    else if (offsetLeftAbs >= (2 * viewPercentage)) {
      $('#marker_block_3').addClass('active_marker_block');
    }
  };

  // ------------------- auto background by click on the markers -------------------- //
  $('.marker_block').click(function(){
    $('.marker_block').removeClass('active_marker_block');
    $(this).addClass("active_marker_block");
  });

  // ------------------- offset slider by click on the markers -------------------- //
  $('.marker_block:eq(0)').click(function(){
    accumCordX = offsetLeft = 0;
    $(".content_slider").css({'left' : offsetLeft + 'px'});
    checkVeloffset();
  });

  $('.marker_block:eq(1)').click(function(){
    accumCordX = offsetLeft = -viewPercentage;
    $(".content_slider").css({'left' : offsetLeft + 'px'});
    checkVeloffset();
  });

  $('.marker_block:eq(2)').click(function(){
    accumCordX = offsetLeft = -(viewPercentage * 2);
    $(".content_slider").css({'left' : offsetLeft + 'px'});
    checkVeloffset();
  });

  // ------------------- offset slider by click on the right button  -------------------- //
  $(".slider_right_btn").click(function () {
    if(offsetLeft > -widthOffset){
      if( (widthOffset + offsetLeft) < slid ){
        offsetLeft += -(widthOffset + offsetLeft);
        $(".content_slider").css({'left' : offsetLeft + 'px'});
      }
      else{
        offsetLeft += -slid;
        $(".content_slider").css({'left' : offsetLeft + 'px'});
      }
    }

    checkVeloffset();
    markersUpperSlider();
  });


  // ------------------- offset slider by click on the left button  -------------------- //
  $(".slider_left_btn").click(function () {
    if(offsetLeft < 0){
      if( -offsetLeft < slid ){
        offsetLeft += -offsetLeft;
        $(".content_slider").css({'left' : offsetLeft + 'px'});
      }
      else{
        offsetLeft += slid;
        $(".content_slider").css({'left' : offsetLeft + 'px'});
      }
    }
    checkVeloffset();
    markersUpperSlider();
  });
  // ------------------- MORE POSTS -------------------- //
  // --------------------------------------------------- //
  if(document.documentElement.clientWidth > 600) {
    $('.conteiner_cards_auto').css({'height' : $('.conteiner_card').outerHeight(true) + "px"});
  }

  if(document.documentElement.clientWidth <= 600) {
    $('.conteiner_cards_auto').css({'height' : ($('.conteiner_card').outerHeight(true) * 3) + "px"});
  }

  $(".btn_more_posts").click(function(){

    // elements relative to the button
    var ConteinerCards = $(this).parent().parent().children(".conteiner_cards_auto"),
    ContentCards = $(this).parent().parent().children(".conteiner_cards_auto").children(".content_cards_auto"),
    Cards = $(this).parent().parent().children(".conteiner_cards_auto").children(".content_cards_auto").children(".conteiner_card"),
    conteinerBtn = $(this).parent(),
    txtBtn = $(this).children();


    // height elements
    var heightConteinerCards = ConteinerCards.outerHeight(true),
    heightContentCards = ContentCards.outerHeight(true),
    heightCards = Cards.outerHeight(true);

    //console.log(heightConteinerCards);
    //console.log(heightContentCards);
    //console.log(heightCards);


    if( heightConteinerCards < heightContentCards ){
        txtBtn.toggleClass("rotate_icon");
        setTimeout(function(){
          if(document.documentElement.clientWidth > 600) heightConteinerCards += heightCards;
          if(document.documentElement.clientWidth <= 600) heightConteinerCards += heightCards * 3;
          if(heightConteinerCards > heightContentCards){
            heightConteinerCards = heightContentCards;
            conteinerBtn.hide();
          }
          else if((heightConteinerCards + heightCards ) > heightContentCards){
            conteinerBtn.hide();
          }
          ConteinerCards.css({'height' : heightConteinerCards + "px"});
          txtBtn.toggleClass("rotate_icon");
        },500);
    }
  });


  // ------------------- FIXED HEADER SORTING ------------------------------ //
  // ----------------------------------------------------------------------- //


  $('.conteiner_sorting_1').css({'height' : $('.conteiner_sorting').outerHeight() + 'px'});
  $(window).scroll(function(){

    var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var conteinerSortingScroll = $(".conteiner_sorting_1").offset().top;
    var sectionCompanyScroll = $(".section_company").offset().top;

    // console.log(windowScroll);
    // console.log(conteinerSortingScroll);
    // console.log(sectionCompanyScroll);


    if(windowScroll > conteinerSortingScroll){
      $(".conteiner_sorting").addClass("conteiner_sorting_fixed");
      $(".content_sorting").addClass("fix_width");
    }
    else if (windowScroll < conteinerSortingScroll){
      $(".conteiner_sorting").removeClass("conteiner_sorting_fixed");
      $(".content_sorting").removeClass("fix_width");
    }

    if (windowScroll >= sectionCompanyScroll){
      $(".conteiner_sorting").removeClass("conteiner_sorting_fixed");
      $(".content_sorting").removeClass("fix_width");
    }
  });

  // ------------------- NUMBER OF PACKAGES ------------------------------ //
  // --------------------------------------------------------------------- //

  var validInp =/^\d+$/;
  var heightConteinerCardPost = $('.conteiner_cards_auto').outerHeight();

  $('.validInput').on('keyup', function(){

    if($('.validInput').val().toString() == '') {
      $('.conteiner_cards_auto').css({'height': heightConteinerCardPost + "px"});
      $('.content_cards_auto').css({'display' : 'block'});
      $('.conteiner_card').css({'display' : 'block'});
      $('.conteiner_non_car_massege').css({'display' : 'none'});
      $('.conteiner_btn_more_posts').css({'display' : 'block'});
    }
    else if(validInp.test($('.validInput').val())){
      $(this).removeClass('numbers_places_error');

      for(var w = 0; w < $('.content_cards_auto').length; w++ ){
        let contentCard = $('.content_cards_auto')[w];
        let indexCard = 0;
        let btn = $(contentCard).parent().parent().find('.conteiner_btn_more_posts');
        let messege = $(contentCard).parent().parent().find('.conteiner_non_car_massege');

        for(var r = 0; r < $(contentCard).children().length; r++ ){
          let card = $(contentCard).children()[r];

          if($(card).find('.places_in_car').html() == $('.validInput').val()){
            $(card).css({'display' : 'block'});
          }
          else{
            $(card).css({'display' : 'none'});
            indexCard++;
          }
        }


        if(indexCard == $(contentCard).children().length){
          $(contentCard).parent().css({'height': 'auto'});
          $(contentCard).css({'display' : 'none'});
          $(messege).css({'display' : 'block'});
          $(btn).css({'display' : 'none'});
        }
        else if(indexCard != $(contentCard).children().length){
          $(contentCard).parent().css({'height': heightConteinerCardPost + "px"});
          $(contentCard).css({'display' : 'block'});
          $(messege).css({'display' : 'none'});
          $(btn).css({'display' : 'block'});
        }

        if(indexCard > ($(contentCard).children().length - 3)) {
          $(btn).css({'display' : 'none'});
          $(contentCard).parent().css({'height' : $(contentCard).outerHeight() + 'px'});
        }
        else $(btn).css({'display' : 'block'});
      }
    }
    else{
      $(this).addClass('numbers_places_error');
      $('.conteiner_card').css({'display' : 'block'});
    }


  });

  $('.nonCarMassege').on('click', function(){
    $('.numbers_places').focus();
  });


  // ------------------- HEIGHT conteiner_label_company -------------------- //
  // ----------------------------------------------------------------------- //
  $('.conteiner_label_company').css({'height' : $('.conteiner_label_company').outerWidth() + 'px'});

});

// ------------------------------- end onload document -------------------------------- //




// ------------------- MARKERS REVIEWS SLIDER -------------------- //
// --------------------------------------------------------------- //
// if(){}



function disableModal(){
  $('.section_modal_calculation').css({'display' : 'none'});
};

var stepSlideMarkers = 0;
function markersReviewsSlider(id){
  stepSlideMarkers = $('.review_card').outerWidth(true) * id;
  $('.content_slider_reviews').css({'left' : -stepSlideMarkers + "px"});
};


$("body").on('click', function(){
  $(".poligons").removeClass("poligons_rotate");
  $(".conteiner_flags").removeClass("conteiner_flag_active");
  $('.conteiner_dropdown_list').children('input').removeClass('dropdown_input_up_active');
  $('.conteiner_dropdown_list').find('.ul_transport').removeClass('ul_transport_up').removeClass('ul_transport_up_active')
});
