///<reference path=".\typed\node.d.ts" />
///<reference path=".\typed\express2.d.ts" />

var express = require('express');
import url = module('url');

import expressD = module("express");
var app: expressD.ExpressServer = express.createServer();

app.use(express.bodyParser());

app.get('/resource', function (req, res) {
    console.log(req.url);

    var msg = req.query.msg;

    if (msg != null) {
        res.send("data:" + msg, 200);
    } else {
        res.send("Whoops", 500);
    }
});

app.post('/resource', function (req, res) {
    console.log(req.url);

    var request: any = req;
    var msg = req.body.msg;

    if (msg != null) {
        res.send("data:" + msg, 200);
    } else {
        res.send("Whoops", 500);
    }

});

app.listen(8090);

