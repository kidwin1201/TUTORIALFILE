var http = require('http');
var uc = require('upper-case');
http.createServer(function ( req,res){
  res.writeHead(200,{'Content-Type': 'texthtml'});
  res.write(uc("Hello World!"));
  res.end();
}).listen(8080);