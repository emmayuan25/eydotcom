var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));
app.use("/images", express.static(__dirname + '/images'));

// viewed at based directory
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'views/index.html'));
});

// other routes below
// app.get('/about', function (req, res) {
//   res.sendFile(path.join(__dirname + 'views/about.html'));
// });

app.listen(process.env.PORT || 8080);

