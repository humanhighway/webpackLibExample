lib = require \lib

module.exports = class App
  !->

    console.log lib
    # include css
    lib.require-css!
    # vendor library
    detect = lib.vendor.detect
    ua = detect.parse navigator.userAgent
    console.log ua.os
    #
    a = new lib.test.a!
      ..hello!

app = new App!
