/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var lib, App, app;
	lib = __webpack_require__(1);
	module.exports = App = (function(){
	  App.displayName = 'App';
	  var prototype = App.prototype, constructor = App;
	  function App(){
	    var detect, ua, x$, a;
	    console.log(lib);
	    lib.requireCss();
	    detect = lib.vendor.detect;
	    ua = detect.parse(navigator.userAgent);
	    console.log(ua.os);
	    x$ = a = new lib.test.a();
	    x$.hello();
	  }
	  return App;
	}());
	app = new App();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = lib;

/***/ }
/******/ ])