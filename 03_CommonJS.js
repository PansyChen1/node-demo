let http = require('http');
// 三种方式进行 exports 和 require
// 方法1
let tools1 = require('./04_tool-add');

// 方法2
// 如果 Node 在当前目录中没有找到 tool.js 文件，则会去 node_modules 中去找
let tools2 = require('03_tool-multiply');

// 方法3
/**
 * 通过package.json 来引用文件
 * 1. 通过在 champion-module 中 npm init --yes 来生成 package.json 文件；
 * 2. package.json 文件中告诉了程序入口文件为 'main': 'tools.js'；
 * 3. Node 通过 require 查找 champion-module，发现有 package.json；
 * 4. Node 执行 tools.js 文件。
 * **/
let tools3 = require('champion-module');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=UTF-8'
    });

    if(req.url !== '/favicon.ico') {
        console.log(tools1.add(1, 2, 3));

        console.log(tools2.multiply(1, 2, 3, 4));

        console.log(tools3.multiply(1, 2, 3, 4));
    }

    res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

    res.end();

}).listen(3000);