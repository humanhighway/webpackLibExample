var lib, App, app;
lib = require('lib');
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