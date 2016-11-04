var classSet = function(dom, num) {
  let className = dom.attr('id').replace(/[0-9]+(?=[^0-9]*$)/, '') + num;
  dom.attr('class', 'section-outfloat').addClass( className );
}

var sectionMove = function(flag) {
  setTimeout(function(){
    if( flag >= 2 && flag <= 4 ){
      classSet($('#section-1-0'), flag)
      classSet($('#section-5-0'), flag)
    }else{
      $('#section-1-0').attr('class', 'section-outfloat hidden');
      $('#section-5-0').attr('class', 'section-outfloat hidden');
    }
  }, 100)
  
}
$('html').on('mousewheel', function (event) {
  let flag = Screen.config.flag - event.deltaY;
  if(flag >= 5) return false;
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
  $('html').find('.orgInfo').removeClass('active');
  if ( $(this).hasClass('active')) {
    $(this).removeClass('active')
  }else{
    $(this).addClass('active')
  }
})

var p5 = function(flag) {
  console.log(flag, typeof(flag))
  if (flag == 4) {
    $('#p5 .container .text').addClass('p5')
  }else{
    $('#p5 .container .text').removeClass('p5')
  }
}