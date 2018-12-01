var events = require('events');
var eventEmitter = new events.EventEmitter();
var http = require('http');

var myEventHandler = function(){
 console.log('A user connected!');
}
eventEmitter.on('scream',myEventHandler);


http.createServer(function (req,res){
 res.writeHead(200,{'Content-Type':'text/html'});
 res.write("Hello client");
 eventEmitter.emit('scream'); 
}).listen(8080)

console.log("Connected");