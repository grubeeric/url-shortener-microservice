var express = require("express");
var app = express();
var path = require("path");
var tinyurl = require("tinyurl");
var validurl = require('valid-url');

var port = process.env.PORT || 3500;

app.listen(port, function(){
  console.log("Listening on port: " + port);
});

app.get('/', function(req, res) {
  var fileName = path.join(__dirname, 'index.html');
  res.sendFile(fileName, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

app.get('/:urlString', function(req, res){
    var url = req.params.urlString;
    console.log("URL passed in: " + url);
    if(validurl.isUri("https://www.google.com")){
        tinyurl.shorten("https://www.google.com/?gws_rd=ssl", function(res){
            console.log(res);
        });
    }
    else{
        console.log(url + " is not a valid url");
    }
});