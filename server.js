/**
 * Created by kevin on 2017/6/26.
 */
var http = require('http');
var express = require('express');
var colors = require('colors');
    var app = express();
    var server = require('http').createServer(app);
    app.use('/',express.static(__dirname + '/www'));
    var io = require('socket.io').listen(server);
    var users = [];
server.listen('8110');
console.log('server started');

//sockct部分
io.on('connection',function(socket){
    socket.on('login',function(nickname){
        if(users.indexOf(nickname)>-1){
            socket.emit('nickExisted');
        }else{
            socket.userIndex = users.length;
            socket.nickname = nickname;
            users.push(nickname);
            socket.emit('loginSuccess');
            io.sockets.emit('system',nickname,users.length,'login');
        };
    });
    //disconnect
    socket.on('disconnect',function(){
        users.splice(socket.userIndex,1);
        socket.broadcast.emit('system',socket.nickname,users.length,'logout');
    });
    //receive new msg
    socket.on('postMsg',function(msg,color){
        socket.broadcast.emit('newMsg',socket.nickname,msg,color);
        console.log('send a msg in system'.rainbow);
    });
    //receive new img
    socket.on('img',function(imgData){
       socket.broadcast.emit('newImg',socket.nickname,imgData);
    });

});