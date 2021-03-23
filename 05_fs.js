/**
 * fs.stat 检测是文件还是目录
 * fs.mkdir 创建目录
 * fs.writeFile 创建写入文件，文件存在即覆盖，不存在即创建
 * fs.appendFile 追加文件
 * fs.readFile 读取文件
 * fs.readdir 读取目录
 * fs.rename 重命名
 * fa.rmdir 删除目录
 * fs.unlink 删除文件
 * **/

 let http = require('http');
 let fs = require('fs');

 http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=UTF-8'
    });

    if(req.url !== '/favicon.ico') {

        // 1. fs.stat
        fs.stat('01_http.js', (error, stats) => {
            if(error) {
                console.log('error---', error);
                return false;
            }else {
                console.log('stats---', stats);

                console.log(`文件：${stats.isFile()}`);

                console.log(`目录：${stats.isDirectory()}`);
            }
        });

        // 2 fs.mkdir
        /**
         * @params path 将创建的目录路径
         * @params mode 目录权限（读写权限），默认 0777
         * @params callback 回调，传递异常参数 err
         * **/
        fs.mkdir('css', (err) => {
            if(err) {
                console.log(err);
                return false;
            }else {
                console.log('创建目录成功！');
            }
        });

        // 3 fs.rmdir
        /**
         * 接收参数
         * path - 将创建的目录路径
         * mode - 目录权限（读写权限），默认 0777
         * callback - 回调，传递异常参数 err
         */
        fs.rmdir('css', (err) => {
            if(err) {
                console.log(err);
                return false;
            } else {
                console.log("创建目录成功！");
            }
        });

        // 4 fs.writeFile
        /**
         * filename (String) 文件名称
         * data (String | Buffer) 将要写入的内容，可以是字符串或者 buffer 数据。
         * · encoding (String) 可选。默认 'utf-8'，当 data 是 buffer 时，该值应该为 ignored。
         * · mode (Number) 文件读写权限，默认 438。
         * · flag (String) 默认值 'w'。
         * callback { Function } 回调，传递一个异常参数 err。
         */
        // fs.writeFile('index.js', 'Hello champion', (err) => {
        //     if(err) {
        //         console.log(err);
        //         return false;
        //     } else {
        //         console.log('写入成功！');
        //     }
        // });
  
    }

    res.end();

 }).listen(3000);
 