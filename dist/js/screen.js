/**
 * 基于jq和mousewheel
 * mousewheel要不要集成进来呢orz
 * 2016-11-3
 */

(function (root, factory) {
  'use strict';

  window.Screen = factory();
})(undefined, function () {
  'use strict';
  var screen = {};

  var setConf = function setConf(options) {
    screen.config = {
      /**
       * direction: 0垂直，1水平
       * document: 插入对象
       * pageCount: 页数
       * flag: 当前位置
       * content: 导航内容
       */
      direction: 1,
      pageDOM: $('body'),
      navDOM: $('body'),
      pageCount: 3,
      flag: 0,
      content: []
    };
    $.extend(screen.config, options);
    launch();
  };

   let move = function move(lastFlag,flag) {
    var unit = 0;
    var distance = 0;
    let conf = screen.config;
    var direction = conf.direction ? 'left' : 'top';
    if (conf.direction) {
      unit = $(window).width();
    } else {
      unit = $(window).height();
    }
    distance = -flag * unit;
    // Screen.fade(flag, lastFlag);
    screen.config.pageDOM.css(direction, distance);
    $('#home-nav-item-' + flag).addClass('active').siblings().removeClass('active');
  };
  //滚动事件监听
  var launch = function launch() {
    var conf = Screen.config;
    //页码导航生成
    var i = 0;
    var direction = conf.direction ? 'left' : 'top';
    for (; i <= conf.pageCount - 1; i++) {
      if (!conf.content[i]) conf.content[i] = '';
      var item = "<div class='home-nav-item' id='home-nav-item-" + i + "' onMouseover='Screen.skip(" + i + ")'>" + conf.content[i] + "</a>";
      "</div>";
      conf.navDOM.append(item);
    }
    $('#home-nav-item-' + conf.flag).addClass('active');

    $('html').on({
      mousewheel: function (event) {
        let lastFlag = conf.flag;
        //转场参数
        if (event.deltaY == -1) {
          conf.flag = conf.flag == conf.pageCount - 1 ? conf.pageCount - 1 : conf.flag + 1;
        }
        if (event.deltaY == 1) {
          conf.flag = conf.flag == 0 ? conf.flag : conf.flag - 1;
        }
        move(lastFlag, conf.flag);
      },
      swipeleft: function() {
        let lastFlag = conf.flag;
        conf.flag = conf.flag == conf.pageCount - 1 ? conf.pageCount - 1 : conf.flag + 1;
        move(lastFlag, conf.flag);
      },
      swiperight: function() {
        let lastFlag = conf.flag;
        conf.flag = conf.flag == 0 ? conf.flag : conf.flag - 1;
        move(lastFlag, conf.flag);
      }
    });
    //窗口大小变化监听
    $(window).resize(function () {
      $(conf.pageDOM).css(direction, -conf.flag * $(window).width());
    });
  };

  screen.skip = function (num) {
    // this.fade(num, this.config.flag);
    move(this.config.flag, num);
    this.config.flag = num;
  };

  // screen.fade = function(flag, lastFlag){
  //   if (lastFlag < this.config.pageCount && flag !== lastFlag) {
  //     setTimeout(function(){$('[target-name="page-' + flag + '"]').css('opacity', 1)}, this.config.speed);
  //     setTimeout(function(){$('[target-name="page-' + lastFlag + '"]').css('opacity', 0)}, this.config.speed);
  //   }
  // };

  screen.init = function (options) {
    setConf(options);
  };

  return screen;
});