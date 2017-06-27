/**
 * Created by kevin on 2017/6/20.
 */
'use strict'
//引入hello模块
var greet = require('./example');
var think = require('./example');
var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');

//greet(s);
//fs read file
fs.readFile('1.mp4',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        console.log(data.length+'bytes');
        var text = data.toString('utf-8');
        //console.log(text);
    }
})

//fs write file
/*
var data = '';
fs.writeFile('copied.txt',data,function(err){
    if(err) {
        console.log(err);
    }else{
        console.log('ok.');
    }
})
*/

//read stream file
var rs = fs.createReadStream('output.txt','utf-8');
rs.on('data',function(chunk){
    console.log('DATA:')
    console.log(chunk);
});

rs.on('end',function(){
    console.log('END');
});
rs.on('error',function(){
    console.log('ERROR' + err);
});

//pipe copy
var ws = fs.createWriteStream('copied.txt');
rs.pipe(ws);

//create http server
var server = http.createServer(function(request,response){
    console.log(request.method + ':' + request.url);
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Bye bye world!</h1>');
});
//server.listen(1424);
console.log('server is running at http://127.0.0.1:1234/');
