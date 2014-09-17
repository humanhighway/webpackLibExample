var detect, a, x$, y$, z$;
detect = require('detect');
a = require('./test/a');
x$ = exports;
y$ = x$.vendor = {};
y$.detect = detect;
z$ = x$.test = {};
z$.a = a;
x$.requireCss = function(){
  require('./../app.css');
};