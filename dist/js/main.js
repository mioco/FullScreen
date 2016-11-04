(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var classSet = function classSet(dom, num) {
  var className = dom.attr('id').replace(/[0-9]+(?=[^0-9]*$)/, '') + num;
  dom.attr('class', 'section-outfloat').addClass(className);
};
$('html').on('mousewheel', function (event) {
  var flag = Screen.config.flag - event.deltaY;
  if (flag >= 2 && flag <= 4) {
    classSet($('#section-1-0'), flag);
    classSet($('#section-5-0'), flag);
  } else {
    $('#section-1-0').attr('class', 'section-outfloat');
    $('#section-5-0').attr('class', 'section-outfloat');
  }
});

},{}]},{},[1]);
