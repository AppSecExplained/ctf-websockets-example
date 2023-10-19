const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

// Serving a simple HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.send('Welcome to the WebSocket chat!');

    ws.on('message', (message) => {
        console.log('Received:', message);
        ws.send('Message received');
    });
});

server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
