var http = require("http");
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
  response.write("Olá Mundo!!");
  response.end();
});
server.listen(8000);
