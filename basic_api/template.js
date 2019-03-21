var http = 'hello, world, I am from template!';
var changeToHeader = () => {
    return '<h1>' + http + '</h1>';
}
console.log('loader module template');
module.exports.changeToHeader = changeToHeader;
module.exports = http;