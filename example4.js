///<reference path=".\typed\node.d.ts"/>
///<reference path=".\typed\request.d.ts"/>
var http = require("http");
var request = require("request");

http.createServer(function (req, res) {
    console.log(req.url);
    req.pipe(request("http://www.google.co.uk/" + req.url)).pipe(res);
}).listen(8090);

//@ sourceMappingURL=example4.js.map
