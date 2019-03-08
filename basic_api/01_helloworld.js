/**
 *  Hello world.
 */

var http = require('http');

var server = http.createServer(function(req,res){
    res.setHeader('content-type', 'text/plain');
    res.end('Hello Node.');
});

server.listen('3000');

console.info('Server is started @3000');