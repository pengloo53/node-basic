/**
 *  Hello world.
 */

const http = require('http');
const template = require('./template.js');
const md5 = require('md5');

http.createServer(function(req,res){
    res.setHeader('content-type', 'text/html');
    res.end(template());
    // res.end(template.changeToHeader());
}).listen('3030');

console.log('Server is started @3030');