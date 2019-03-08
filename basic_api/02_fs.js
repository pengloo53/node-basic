/**
 *  fs 模块
 */

var fs = require('fs');

fs.readFile(__dirname + '/01_helloworld.js', 'utf8', function(err, data){
    if (err) { throw err;}
    console.log(data);
});