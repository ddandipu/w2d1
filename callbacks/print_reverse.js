var myhttp = require("./http-functions.js");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  var stringNoSpace = html.split(" ").join("").toUpperCase();
  var stringReverse = html.split("").reverse().join("");
  console.log(stringReverse);
}

myhttp.getHTML(requestOptions, printHTML);