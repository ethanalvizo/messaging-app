const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);

const io = socketio(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log('We have a new connection');

    socket.on('join', ({ name, room }, callback) => {
        console.log(name, room);

    })

    socket.on('leave', () => {
        console.log('User had left');
    })
});


app.use(cors());
app.use(router);


server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));



