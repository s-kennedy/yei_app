var express = require('express');
var app = express();

app.use(express.static(__dirname + '/files'));
app.use(express.static(__dirname + '/img'));
app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/bower_components'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/files/index.html');
})


app.get('/show', function (req, res) {
  res.sendFile(__dirname + '/files/show.html');
});

app.get('/new', function (req, res) {
  res.sendFile(__dirname + '/files/new.html');
});

app.get('/filter', function (req, res) {
  res.sendFile(__dirname + '/files/filter.html')
})


var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

});
