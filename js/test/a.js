var A;
module.exports = A = (function(){
  A.displayName = 'A';
  var prototype = A.prototype, constructor = A;
  prototype.hello = function(){
    return console.log('from test package');
  };
  function A(){}
  return A;
}());