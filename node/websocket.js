var io = require('socket.io').listen(8000);
io.sockets.on('connection', function (socket) {
    socket.on('emissor', function(texto) {
        io.sockets.emit('recpetor', texto);
    });
});