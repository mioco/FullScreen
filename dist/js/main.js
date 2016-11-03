(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

'use strict'(function (root, factory) {
  console.log(typeof define === 'undefined' ? 'undefined' : _typeof(define));
})(undefined, function () {
  var CrossWise = {};
  // 横向滚动
  var page = 3;
  var flag = 0;
  var left = 0;
  $('html').on('mousewheel', function (event) {
    var winWidth = $(window).width();
    if (event.deltaY == -1) {
      flag = flag == page ? page : flag + 1;
      left = -flag * winWidth;
    }
    if (event.deltaY == 1) {
      flag = flag == 0 ? flag : flag - 1;
      left = -flag * winWidth;
    }
    $('.home-container').css('left', left);
  });

  //窗口大小变化监听
  $(window).resize(function () {
    winWidth = $(window).width();
    left = -flag * winWidth;
    $('.home-container').css('left', left);
  });

  //页码导航生成
  window.prototype.pageNav = function (dom, list) {
    var i = 0;
    for (; i <= page; i++) {
      var item = "<div class='home-nav-item'>" + list[i] + "</div>";
      dom.append(item);
    }
  };
});

},{}]},{},[1]);
