
//var debug = require('debug')('Server:server');
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);
var fs=require('fs');
var ss= require('socket.io-stream');

var port = process.env.PORT || '3000';



// map: username - {socket: string, peerid: string}
var users = {};


io.on('connection', function (socket) {

    // connect
    socket.on('login', function (username, peerid) {
        if (users[username]) {
            socket.emit('login', { success: false, msg: 'username already in use' });
        } else {
            users[username] = { socket: socket, peerid: peerid };
            socket.emit('login', { success: true, msg: 'successfully logged in' });
            socket.broadcast.emit('join', username);
        }
    });

    // ask for other users
    socket.on('users', function (username) {
        var others = Object.keys(users);
        others.splice(others.indexOf(username), 1);
        socket.emit('users', others);
    })

    // remove connection from listening sockets
    socket.on('disconnect', function () {
        let username = nameBySocket(users, socket);
        if (username) {
            delete users[username];
            socket.broadcast.emit('leave', username);
        }
    });

    // send a message
    socket.on('add-message', (message, username) => {
    io.emit('message', {
      type:'new-message',
      text: message,
      username: username
    });
    //console.log('Message sent...');
  });
    //send private message
    /*
    socket.on('msg.private', function(obj) {
        console.log('routing private message');
        if (obj.to && users[obj.to]) {
            console.log('delivering to', obj.to);
            users[obj.to].emit('msg.private', obj.message);
        }
    });*/

     socket.on('chat message', function(user,message){
        socket.to(user).emit('chat message', message);
        });


    ss(socket).on('file', (stream, data) => {
        stream.pipe(fs.createWriteStream( Date.now() +'.txt'));
    });



});


function nameBySocket(users, socket) {
    for (var username in users) {
        if (users.hasOwnProperty(username)) {
            if (users[username].socket === socket) {
                return username;
            }
        }
    }
    return null;
}

console.log('server listening on port ' + port);
server.listen(port);
