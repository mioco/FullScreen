(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var classSet = function classSet(dom, num) {
  var className = dom.attr('id').replace(/[0-9]+(?=[^0-9]*$)/, '') + num;
  dom.attr('class', 'section-outfloat').addClass(className);
};

var sectionMove = function sectionMove(flag) {
  if (flag >= Screen.config.pageCount) return false;
  window.flag = flag;
  setTimeout(function () {
    if (flag >= 0 && flag <= 4) {
      classSet($('#section-1-0'), flag);
      classSet($('#section-5-0'), flag);
    } else {
      $('#section-1-0').attr('class', 'section-outfloat hidden');
      $('#section-5-0').attr('class', 'section-outfloat hidden');
    }
    if ($(window).width() >= 790) {
      switch (parseInt(flag)) {
        case 0:
          $('#section-1-0').html('');
          $('#section-5-0').html('');
          break;
        case 1:
          $('#section-1-0').html($('.right').html());
          $('#section-5-0').html($('.left').html());
          if ($(window).width() >= 790) {
            $('.left').css('opacity', 0);
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
        default:
          break;
      }
    }
  }, 100);

  //清空active
  $('html').find('.orgInfo').removeClass('active').siblings().removeClass('active');
  $('html').find('.orgInfo .btn').remove();
  p5(flag);
};
$(window).resize(function () {
  if ($(window).width() <= 790) {
    $('#section-1-0,#section-5-0').html('');
  }
});
$('html').on({
  mousewheel: function mousewheel(event) {
    sectionMove(Screen.config.flag - event.deltaY);
  },
  swipeleft: function swipeleft() {
    sectionMove(Screen.config.flag + 1);
  },
  swiperight: function swiperight() {
    sectionMove(Screen.config.flag - 1);
  }
});
$(document).on('mouseover', '.home-nav-item', function () {
  var reg = new RegExp(/[0-9]+(?=[^0-9]*$)/);
  var flag = reg.exec($(this).attr('id'));
  sectionMove(flag[0]);
  p5(flag[0]);
});

$(document).on('click', '.orgInfo', function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active').next().removeClass('active');
    $('.section-5-3').removeClass('active');
  } else {
    $('html').find('.orgInfo').removeClass('active').next().removeClass('active');
    $(this).addClass('active').next().addClass('active');
    $('.section-5-3').addClass('active');
  }
});

var p5 = function p5(flag) {
  if (flag == 4) {
    $('#p5 .container .text').addClass('p5');
  } else {
    $('#p5 .container .text').removeClass('p5');
  }
};

var p3_flag = 0;
$('.turnBtn').on('click', function () {
  if (p3_flag) {
    p3_flag = 0;
    $('#section-5-0').addClass('active').siblings('.section-outfloat').removeClass('active');
  } else {
    p3_flag = 1;
    $('#section-1-0').addClass('active').siblings('.section-outfloat').removeClass('active');
  }
});

$('nav .btn').on('click', function () {
  if ($('nav .btn').hasClass('active')) {
    $('.nav').removeClass('active');
    $('nav .btn').removeClass('active');
  } else {
    $('.nav').addClass('active');
    $('nav .btn').addClass('active');
  }
});

$(window).resize(function () {
  $('.left').css('opacity', 1);
});

window.login = function () {
  $('.nav').addClass('login');
  $('.nav ul#notlogin').attr('hidden', 'hidden');
  $('.nav ul#login').removeAttr('hidden');
};
window.loginout = function () {
  $('.nav').removeClass('login');
  $('.nav ul#login').attr('hidden', 'hidden');
  $('.nav ul#notlogin').removeAttr('hidden');
};

window.regist = function () {
  $('div#regist').addClass('active');
};
window.rcancel = function () {
  $('div#regist').removeClass('active');
};

},{}]},{},[1]);
