/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./resources/js/welcome.js ***!
  \*********************************/
$(function () {
  $('a#filter-button').click(function () {
    var form = $('form.sidebar-filter').serialize();
    console.log(decodeURI(form));
  });
});
/******/ })()
;