const http = require('http');
const url = require('url');
const querystring = require('querystring');
http.createServer(function(req,res){
    const query = url.parse(req.url).query;
    const queryObject = querystring.parse(query);
    if ( queryObject.callback ) {
        let callbackFunc = queryObject.callback;
        let returnData = { message: 'Hello, World'}
        return res.end(callbackFunc + '('+ JSON.stringify(returnData) +')');
    }else{
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Access-Control-Allow-Origin', '*');
        // res.setHeader('Access-Control-Allow-Methods', '*');
        res.end('Hello, World');
    }
}).listen('3000');
console.log('Your Server is started @3000');