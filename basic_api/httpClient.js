const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function(req, res){
    res.setHeader('Content-Type', 'text/html');
    let url = req.url;
    if( url === '/getCrossResource' ){
        const request = http.request({
            host: 'localhost',
            port: '3000',
            path: '/'
        }, function(response){
            response.pipe(res);
        });
        request.on('error', function (e) {
            console.log('error: ' + e.message);
        });
        request.end();  // 发送请求
    }else if(url === '/'){
        let filePath = path.join(__dirname, 'ajax.html');
        let httpFile = fs.createReadStream(filePath, 'utf8');
        httpFile.pipe(res);
    }
}).listen('8080');
console.log('Your Client is started @8080');