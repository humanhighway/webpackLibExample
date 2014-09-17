# a 為 vendor 類 js
# b 為自家寫 js

require! detect
a = require \./test/a

exports
  ..vendor = {}
    ..detect = detect
  ..test = {}
    ..a = a
  ..require-css = !-> require \./../app.css
