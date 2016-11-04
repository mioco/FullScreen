var classSet = function(dom, num) {
  let className = dom.attr('id').replace(/[0-9]+(?=[^0-9]*$)/, '') + num;
  dom.attr('class', 'section-outfloat').addClass( className );
}
$('html').on('mousewheel', function (event) {
  let flag = Screen.config.flag- event.deltaY;
  if( flag >= 2 && flag <= 4 ){
    classSet($('#section-1-0'), flag)
    classSet($('#section-5-0'), flag)
  }else{
    $('#section-1-0').attr('class', 'section-outfloat');
    $('#section-5-0').attr('class', 'section-outfloat');
  }
})