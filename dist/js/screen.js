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

  //滚动事件监听
  var launch = function launch() {
    var unit = 0;
    var direction = '';
    var conf = Screen.config;
    var distance = 0;

    //页码导航生成
    var i = 0;

    for (; i <= conf.pageCount - 1; i++) {
      if (!conf.content[i]) conf.content[i] = '';
      var item = "<div class='home-nav-item' id='home-nav-item-" + i + "' onMouseover='Screen.skip(" + i + ")'>" + conf.content[i] + "</a>";
      "</div>";
      conf.navDOM.append(item);
    }
    $('#home-nav-item-' + conf.flag).addClass('active');

    $('html').on('mousewheel', function (event) {
      if (conf.direction) {
        unit = $(window).width();
        direction = 'left';
      } else {
        unit = $(window).height();
        direction = 'top';
      }

      //转场参数
      let lastFlag = conf.flag;

      if (event.deltaY == -1) {
        conf.flag = conf.flag == conf.pageCount - 1 ? conf.pageCount - 1 : conf.flag + 1;
      }
      if (event.deltaY == 1) {
        conf.flag = conf.flag == 0 ? conf.flag : conf.flag - 1;
      }
      distance = -conf.flag * unit;
      Screen.fade(conf.flag, lastFlag);
      move(direction, distance, conf.flag);
    });
    //窗口大小变化监听
    $(window).resize(function () {
      $(conf.pageDOM).css(direction, -conf.flag * $(window).width());
    });
  };

  var move = function move(direction, distance, flag) {
    screen.config.pageDOM.css(direction, distance);
    $('#home-nav-item-' + flag).addClass('active').siblings().removeClass('active');
  };

  screen.skip = function (num) {
    var direction = this.config.direction ? 'left' : 'top';
    var distance = -num * $(window).width();
    this.fade(num, this.config.flag);
    move(direction, distance, num);
    this.config.flag = num;
  };

  screen.fade = function(flag, lastFlag){
    if (lastFlag < this.config.pageCount && flag !== lastFlag) {
      setTimeout(function(){$('[target-name="page-' + flag + '"]').css('opacity', 1)}, this.config.speed);
      setTimeout(function(){$('[target-name="page-' + lastFlag + '"]').css('opacity', 0)}, this.config.speed);
    }
  };

  screen.init = function (options) {
    setConf(options);
  };

  return screen;
});