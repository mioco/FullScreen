var classSet = function(dom, num) {
  let className = dom.attr('id').replace(/[0-9]+(?=[^0-9]*$)/, '') + num;
  dom.attr('class', 'section-outfloat').addClass( className );
}

var sectionMove = function(flag) {
  if(flag >= Screen.config.pageCount) return false;
  window.flag = flag;
  setTimeout(function(){
    if( flag >= 0 && flag <= 4 ){
      classSet($('#section-1-0'), flag)
      classSet($('#section-5-0'), flag)
    }else{
      $('#section-1-0').attr('class', 'section-outfloat hidden');
      $('#section-5-0').attr('class', 'section-outfloat hidden');
    }
    switch(parseInt(flag)) {
      case 0:
        $('#section-1-0').html('');
        $('#section-5-0').html('');
        break;
      case 1:
        $('#section-1-0').html($('.right').html());
        $('#section-5-0').html($('.left').html());
        if($(window).height() >= 760){
          $('.left').css('opacity', 0)
          }
        break;
      case 2:
        $('#section-1-0').addClass('active').html($('#p3 .left').html());
        $('#section-5-0').html($('#p3 .right').html());
        break;
      case 3:
        $('#section-1-0').html($('#p4 .container').html());
        $('#section-5-0').html('');
        break;
      case 4:
        $('#section-1-0').html('');
        $('#section-5-0').html('');
        break;
      default: break;
    }    
  }, 100)

  //清空active
  $('html').find('.orgInfo').removeClass('active');
  p5(flag);
}

$('html').on({
  mousewheel: function (event) {
    sectionMove(Screen.config.flag - event.deltaY);
  },
  swipeleft: function() {
    sectionMove(Screen.config.flag + 1);
  },
  swiperight: function() {
    sectionMove(Screen.config.flag - 1);
  }
})
$(document).on('mouseover', '.home-nav-item', function() {
  let reg = new RegExp(/[0-9]+(?=[^0-9]*$)/);
  let flag = reg.exec($(this).attr('id'));
  sectionMove(flag[0]);
  p5(flag[0]);
})

$(document).on('click', '.orgInfo', function(){
  if ( $(this).hasClass('active') ) {
    $(this).removeClass('active').next().removeClass('active');
    $('.section-5-3').removeClass('active');

  }else{
    $('html').find('.orgInfo').removeClass('active').next().removeClass('active');
    $(this).addClass('active').next().addClass('active')
    $('.section-5-3').addClass('active');
  }
})

let p5 = function(flag) {
  if (flag == 4) {
    $('#p5 .container .text').addClass('p5')
  }else{
    $('#p5 .container .text').removeClass('p5')
  }
}

let p3_flag = 0;
$('.turnBtn').on('click', function() {  
  if (p3_flag) {
    p3_flag = 0;
    $('#section-5-0').addClass('active').siblings('.section-outfloat').removeClass('active');
  }else {
    p3_flag = 1;
    $('#section-1-0').addClass('active').siblings('.section-outfloat').removeClass('active');
  }
})

$('nav .btn').on('click', function(){
  if( $('nav .btn').hasClass('active') ) {
    $('.nav').removeClass('active')
    $('nav .btn').removeClass('active')
  }else {
    $('.nav').addClass('active');
    $('nav .btn').addClass('active')
  }
})