
// ------------------- SLIDER ----------------------- //
// -------------------------------------------------- //
function slider(slider, conteinerMarkers, classActiveMarker){
  let widthSlid = $(slider).children().outerWidth(true),
  widthSlider = $(slider).outerWidth(),
  widthConteinerSlider = $(slider).parent().outerWidth();

  let newWidthSlide = $(slider).children().outerWidth(true) * $(slider).children().length;
  $(slider).css({'width': newWidthSlide + 'px'});

  let offset = newWidthSlide - widthConteinerSlider;

  let viewPercentage = newWidthSlide * 1/3;

  // console.log(slider +" || widthSlid: "+ widthSlid);
  // console.log(slider +" || newWidthSlide: "+ newWidthSlide);
  // console.log(slider +" || widthConteinerSlider: "+ widthConteinerSlider);
  // console.log(slider +" || offset: "+ offset);
  // console.log(slider +" || viewPercentages: "+ viewPercentage);
  // console.log("____________________________________________________");


  var coordX = {
    startCoordx: 0,
    moveCoordX: 0,
    absCoordX: 0,
    accumCordX: 0,
    sumCoordX: 0
  };


  $(slider).parent().on('touchstart', function(event){
    event.stopPropagation();
    event.preventDefault();
    coordX.startCoordx = event.changedTouches[0].pageX;

    if(coordX.accumCordX != Number.parseInt($(slider).css('left'))){
      coordX.accumCordX = Number.parseInt($(slider).css('left'));
    }
    // console.log( Number.parseInt($(slider).css('left')));
  });


  $(slider).parent().on('touchmove', function(event){
    event.stopPropagation();
    event.preventDefault();
    coordX.moveCoordX = event.changedTouches[0].pageX;
    coordX.absCoordX = coordX.moveCoordX - coordX.startCoordx;
    coordX.sumCoordX = coordX.accumCordX + coordX.absCoordX;

    $(slider).css({'left': coordX.sumCoordX + 'px', 'transition' : ''});

  });


  var coundrMaek = 0;
  $(slider).parent().on('touchend', function(event){
    event.stopPropagation();
    event.preventDefault();

    // ------------------------------------------- //
    if(coordX.absCoordX < 0 &&  coordX.absCoordX > -widthSlid){
      coordX.accumCordX += -widthSlid;
      $(slider).css({'left': coordX.accumCordX + 'px', 'transition' : '.3s'});
    }
    else if(coordX.absCoordX > 0 && coordX.absCoordX < widthSlid){
      coordX.accumCordX += widthSlid;
      $(slider).css({'left': coordX.accumCordX + 'px', 'transition' : '.3s'});
    }
    else{
      coordX.accumCordX += coordX.absCoordX;
    }

    // setTimeout(function(){
    //
    //   console.log( Number.parseInt($(slider).css('left')));
    // }, 1000);


    // ------------------------------------------- //
    if( (coordX.accumCordX + coordX.absCoordX) < -offset){
      coordX.accumCordX = -offset;
      $(slider).css({'left': coordX.accumCordX + 'px', 'transition' : '.3s'});
    }
    else if( (coordX.accumCordX + coordX.absCoordX) > 0){
      coordX.accumCordX = 0;
      $(slider).css({'left': coordX.accumCordX + 'px', 'transition' : '.3s'});
    }
    else{
      coordX.accumCordX += coordX.absCoordX;
    }
    // ------------------------------------------- //

    setTimeout(function(){
      let offsetLeftAbs = Number.parseInt($(slider).css('left'));

      if (offsetLeftAbs > -viewPercentage) {
        $(conteinerMarkers).children().removeClass(classActiveMarker);
        let ch1 = $(conteinerMarkers).children()[0];
        $(ch1).addClass(classActiveMarker);
      }
      else if ((offsetLeftAbs => -viewPercentage) && (offsetLeftAbs > -(viewPercentage * 2))) {
        $(conteinerMarkers).children().removeClass(classActiveMarker);
        let ch2 = $(conteinerMarkers).children()[1];
        $(ch2).addClass(classActiveMarker);
      }
      else if (offsetLeftAbs <= -(2 * viewPercentage)) {
        $(conteinerMarkers).children().removeClass(classActiveMarker);
        let ch3 = $(conteinerMarkers).children()[2];
        $(ch3).addClass(classActiveMarker);
      }
    }, 350);

  });


  $('.btn_slide_map').on('touchend', function(event){
    event.stopPropagation();
    $('.section_modal_calculation').css({'display' : 'block'});
    $('.conteiner_left_block ').css({'height' : $('.conteiner_left_block ').outerHeight() + "px"})
    $('.conteiner_right_block ').css({'height' : $('.conteiner_right_block ').outerHeight() + "px"})
  });


};
