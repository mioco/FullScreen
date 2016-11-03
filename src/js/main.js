'use strict'
(function(root, factory){
  console.log(typeof define)
  
})(this, function(){
  var CrossWise = {};
  // 横向滚动
  const page = 3;
  let flag = 0;
  let left = 0;
  $('html').on('mousewheel', function(event) {    
    let winWidth = $(window).width();
    if( event.deltaY == -1 ){
      flag = (flag == page) ? page : flag + 1;
      left = -flag * winWidth;
    }
    if( event.deltaY == 1 ){
      flag = (flag == 0) ? flag : flag - 1;
      left = -flag * winWidth;
    }
    $('.home-container').css('left', left)
  });

  //窗口大小变化监听
  $(window).resize(function() {          
    winWidth = $(window).width();
    left = -flag * winWidth;
    $('.home-container').css('left', left)
  })

  //页码导航生成
  window.prototype.pageNav = function (dom, list) {
    let i = 0;    
    for(; i <= page; i++){
      let item = 
      "<div class='home-nav-item'>" +
      list[i] +
      "</div>";
      dom.append(item)
    }
  }
})