/**
 * 1. 控制台
 * 2. http 的 request
 * 3. 读文件
 */

// read
// process.stdin.on('data', function(chunk){
//     console.log('stdout: ' + chunk.toString());
// });
// write
// process.stdin.pipe(process.stdout);

// read
var http = require('http');
// var url = require('url');
http.createServer(function(req, res){
    // var data = JSON.stringify(url.parse(req.url));
    // req.on('data', function(chunk){
    //     data += chunk;
    // });
    // req.on('end', function(){
    //     res.setHeader('content-type', 'text/plain');
    //     res.end(data);
    // });
    res.setHeader('content-type', 'text/plain');
    req.pipe(res);
}).listen('3030');

// 3
// var fs = require('fs');
// var readStream = fs.createReadStream(__dirname + '/stream.js');
// var data = '';
// readStream.on('data', function(chunk){
//     data += chunk.toString();
// });
// readStream.on('end', function(){
//     console.log(data);
// });