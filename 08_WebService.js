let http = require('http');

let fs = require('fs');

let url = require('url');

let path = require('path');

http.createServer((req, res) => {
    
    // 获取响应路径
    let pathname = url.parse(req.url).pathname;

    // 默认加载路径
    if(pathname === '/') {
        // 默认加载的首页
        pathname = 'index.html';
    }

    // 获取文件的后缀名
    let extName = path.extname(pathname);

    console.log('extName---', extName);

    if(req.url !== '/favicon.ico') {

        fs.readFile('./08_WebService/' + pathname, (err, data) => {

            if(err) {
            // 获取 08_WebService 下的 index.html
            fs.readFile('./08_WebService/404.html', (errorNotFound, dataNotFound) => {
                if(errorNotFound) {
                    console.log('errorNotFound---', errorNotFound)
                } else {
                    res.writeHead(200, {
                        "Content-Type": "text/html; charset='utf-8'"
                    });
                    // 读取写入文件
                    res.write(dataNotFound);

                    res.end();
                }
            });
                return;
            } else {

                // 获取文件类型
                let ext = getExt(extName);
                // 设置请求头
                res.writeHead(200, {
                    "Content-Type": ext + "; charset='utf-8'"
                });
                // 读取写入文件
                res.write(data);
                // 结束响应
                res.end();
            }
        });
    }
        
}).listen(3000);

// 获取后缀名
getExt = (extName) => {
    switch(extName) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/js';
        default:
            return 'text/html';
    }
}