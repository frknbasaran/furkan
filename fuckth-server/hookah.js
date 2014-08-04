var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.setHeader('content-type', 'text/javascript');
    res.send(req.query.callback+"('hi','"+req.query.service+"');");
});

app.listen(1337);