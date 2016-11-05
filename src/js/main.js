var classSet = function(dom, num) {
  let className = dom.attr('id').replace(/[0-9]+(?=[^0-9]*$)/, '') + num;
  dom.attr('class', 'section-outfloat').addClass( className );
}

var sectionMove = function(flag) {
  setTimeout(function(){
    if( flag >= 1 && flag <= 4 ){
      classSet($('#section-1-0'), flag)
      classSet($('#section-5-0'), flag)
    }else{
      $('#section-1-0').attr('class', 'section-outfloat hidden');
      $('#section-5-0').attr('class', 'section-outfloat hidden');
    }
    switch(parseInt(flag)) {
      case 1:
        $('#section-1-0').html($('#img-box').html());
        $('#section-5-0').html();
        break;
      case 2:
        $('#section-1-0').html($('#section-2').html());
        $('#section-5-0').html($('#section-5').html());
        break;
      case 3:
        $('#section-1-0').html($('#section-6').html());
        $('#section-5-0').html($('#section-9').html());
        break;
      case 4:
        $('#section-1-0').html($('#section-2').html());
        $('#section-5-0').html($('#section-5').html());
        break;
      default: break;
    }    
  }, 100)

  //清空active
  $('html').find('.orgInfo').removeClass('active');
}

$('html').on('mousewheel', function (event) {
  let flag = Screen.config.flag - event.deltaY;
  if(flag >= Screen.config.pageCount) return false;
  sectionMove(flag);
  window.flag = flag[0];

  p5(flag);
})
$(document).on('mouseover', '.home-nav-item', function() {
  let reg = new RegExp(/[0-9]+(?=[^0-9]*$)/);
  let flag = reg.exec($(this).attr('id'));
  sectionMove(flag[0]);
  p5(flag[0]);
})

$('.orgInfo').on('click', function(){
  if ( $(this).hasClass('active') ) {
    $(this).removeClass('active')
  }else{
    $('html').find('.orgInfo').removeClass('active');
    $(this).addClass('active')
  }
})

var p5 = function(flag) {
  if (flag == 4) {
    $('#p5 .container .text').addClass('p5')
  }else{
    $('#p5 .container .text').removeClass('p5')
  }
}