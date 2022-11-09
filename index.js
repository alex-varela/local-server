var express = require("express");
var server = express();

server.get(
  "/.well-known/apple-app-site-association",
  function (request, response) {
    response.sendFile(__dirname + "/apple-app-site-association");
  }
);

// server.get('/.well-known/assetlinks.json', function(request, response) {
//   response.sendFile(__dirname +  '/assetlinks.json');
// });

server.listen(process.env.PORT || 8888);
