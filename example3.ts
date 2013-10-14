///<reference path=".\typed\node.d.ts"/>

import http = module('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log('request received');
    res.end('Hello World\n');
}).listen(8090, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8090/');
