let http = require('http');

http.createServer((req, res) => {
    console.log('1---');

    console.log('2---');
    
    console.log('3---');

    // 结束响应
    res.end();

}).listen(3000); // 监听的端口
