var express = require('express');
var app = express();
 
app.use('/public', express.static('public'));
 
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("the address is: http://%s:%s", host, port)
   //   http://127.0.0.1:8081/index.html
 
})