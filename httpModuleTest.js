var myhttp = require("./http-functions.js");

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};


myhttp.getHTML(requestOptions, myhttp.printupperHTML);