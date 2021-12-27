var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");

var corsOptions = {
  origin: "https://proud-mud-013f1150f.azurestaticapps.net",
  optionsSuccessStatus: 200,
};

app.get("/data", cors(corsOptions), function(req, res) {
  fs.readFile("./data.json", "utf8", function(err, data) {
    res.header("Content-Type", "application/json; charset=utf-8");
    var data = JSON.parse(data);
    console.log(data);
    res.end(JSON.stringify(data));
  });
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
