/**
 * Created by kevin on 2017/6/20.
 */
'use strict'
var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');
var root =path.resolve(process.argv[2]||'.');
console.log('Static root dir:' + root);

//create server
var server = http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;//require path
    var filepath = path.join(root,pathname);//merge path
    fs.stat(filepath,function(err,stats){
        if(!err&&stats.isFile()&&stats.isDirectory()){
            console.log('200',+request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else{
            console.log('404' + request.url);
            response.writeHead(404);
            response.end('404 not found');
        }
    });
});
server.listen(8127);
console.log('server is running at http://127.0.0.1:8127/');

