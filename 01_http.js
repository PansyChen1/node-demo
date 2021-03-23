/**
 * 1. 引入 http 模块
 * **/
let http = require('http');
let url = require('url');

/**
 * 2. 用 http 模块创建服务
 * req 获取 url 信息（request）
 * res 浏览器返回相应信息（response）
 * **/
http.createServer((req, res) => {
    // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
    res.writeHead(200, {
        'Content-Type' : 'text/html;charset=UTF-8'
    });

    res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

    // 结束响应
    res.end();

}).listen(3000); // 监听的端口



