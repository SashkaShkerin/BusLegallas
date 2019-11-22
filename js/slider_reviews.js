
  // --------------------- SLIDER REVIEWS ------------------------ //
  // ------------------------------------------------------------ //
  $('.review_card').css({'width' : ($('.conteiner_slider_reviews').outerWidth() - 40) + 'px'});

  var widthConteinerSliderREV = $(".conteiner_slider_reviews").outerWidth(),
  widthSliderREV = $('.review_card').outerWidth(true) * $('.review_card').length,
  slidREV = $('.review_card').outerWidth(true);

  $('.content_slider_reviews').css({'width' : widthSliderREV + 'px'});

  var widthOffsetREV = widthSliderREV - widthConteinerSliderREV;
  var offsetLeftREV = 0;
  var viewPercentageREV = widthSliderREV * (1 / 3);

  // console.log("widthConteinerSliderREV "+widthConteinerSliderREV);
  // console.log("widthSliderREV "+widthSliderREV);
  // console.log("slidREV "+slidREV);
  // console.log("widthOffsetREV "+widthOffsetREV);
  //
  //
  // console.log("widthConteinerSliderREV "+$(".conteiner_slider_reviews").outerWidth());
  // console.log("widthSliderREV "+$('.review_card').outerWidth(true) * $('.review_card').length);
  // console.log("slidREV "+$('.review_card').outerWidth(true));
  // console.log("widthOffsetREV "+(($('.review_card').outerWidth(true) * $('.review_card').length) - $(".conteiner_slider_reviews").outerWidth()) );

  function markersREVSlider(){
    let offsetLeftREVAbs = Math.abs(offsetLeftREV);
    $('.circle_markers_reviews').removeClass('circle_markers_reviews_active');

    if (offsetLeftREVAbs == 0) {
      $('.circle_markers_reviews').eq(0).addClass('circle_markers_reviews_active');
    }
    else if (offsetLeftREVAbs == viewPercentageREV ) {
      $('.circle_markers_reviews').eq(1).addClass('circle_markers_reviews_active');
    }
    else if (offsetLeftREVAbs == (2 * viewPercentageREV)) {
      $('.circle_markers_reviews').eq(2).addClass('circle_markers_reviews_active');
    }
    else {
      $('.circle_markers_reviews').addClass('circle_markers_reviews_active');
    }
  };


  $('.right_btn_reveiws').click(function(){
    if( offsetLeftREV != Number.parseInt($('.content_slider_reviews').css('left')) )
      offsetLeftREV = Number.parseInt($('.content_slider_reviews').css('left'));

    if(offsetLeftREV > -widthOffsetREV){
      offsetLeftREV -=slidREV;
      $('.content_slider_reviews').css({'left' : offsetLeftREV + 'px'});
    }
    else if(offsetLeftREV <= -widthOffsetREV){
      offsetLeftREV = -widthOffsetREV;
      $('.content_slider_reviews').css({'left' : offsetLeftREV + 'px'});
    }
    markersREVSlider();
  });


  $('.left_btn_reveiws').click(function(){
    if( offsetLeftREV != Number.parseInt($('.content_slider_reviews').css('left')) ) offsetLeftREV = Number.parseInt($('.content_slider_reviews').css('left'));

    if(offsetLeftREV < 0){
      offsetLeftREV +=slidREV;
      $('.content_slider_reviews').css({'left' : offsetLeftREV + 'px'});
    }
    else if(offsetLeftREV => 0){
      offsetLeftREV = 0;
      $('.content_slider_reviews').css({'left' : offsetLeftREV + 'px'});
    }
    markersREVSlider();
  });


  $('.circle_markers_reviews').on('click', function(){
    $('.circle_markers_reviews').removeClass('circle_markers_reviews_active');
    $(this).addClass('circle_markers_reviews_active');
  });
