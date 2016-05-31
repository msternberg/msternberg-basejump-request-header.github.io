var http = require('http');
var express = require('express');
var app = express();

var port = process.env.PORT || 3500;

app.use('/api', express.static(__dirname + "/static"));

app.listen(port, function() {
  console.log("Listening on port: " + port);
});

app.get('/', function (req, res) {
  res.send("Hello World");
});

app.get('/api/whoami/', function (req, res) {
  var sftwareStr = req.headers['user-agent'].match(/\(.*\;/)[0].substring(1);
  sftwareStr += req.headers['user-agent'].match(/\; [A-Z0-9]+/)[0].substring(1);
  res.json({
    ipaddress: req.headers['host'],
    language: req.headers['accept-language'].match(/en-([A-Z])+/)[0],
    software: sftwareStr
  });
});
