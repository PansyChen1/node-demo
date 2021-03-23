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

    if(req.url !== '/favicon.ico') {
        /**
         * parse 方法需要两个参数
         * 第一个参数是地址
         * 第二个参数是 true 的话表示把 get 传值转换成对象
         * **/
        let result = url.parse(req.url, true);

        // 当前 url 为 http://localhost:3000/?userName=jsliang&userAge=23
        // console.log('result---', result, result.query.userName);
        
        /**
         * 学习 Url模块的使用
         * **/
        console.log('url---', url);
        console.log('url parse---', url.parse('http://www.baidu.com'));
        console.log('url parse with params---', url.parse('http://www.baidu.com/new?name=zhangsan'));
        console.log('format---', url.format({
            protocol: 'http:',
            slashes: true,
            auth: null,
            host: 'www.baidu.com',
            port: null,
            hostname: 'www.baidu.com',
            hash: null,
            search: '?name=zhangsan',
            query: 'name=zhangsan',
            pathname: '/new',
            path: '/new?name=zhangsan',
            href: 'http://www.baidu.com/new?name=zhangsan'
        }));
        console.log(url.resolve("http://www.baidu.com/jsliang", "Champion"));
    }

    // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
    res.writeHead(200, {
        'Content-Type' : 'text/html;charset=UTF-8'
    });

    res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

    // 结束响应
    res.end();

}).listen(3000); // 监听的端口



