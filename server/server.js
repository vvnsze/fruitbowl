var express = require('express');
var app = express();

app.get('/',function(req, res){
  res.send('hello world');
})

var port = (process.env.PORT || 1336);

app.listen(port, function(){
  console.log('app is listening to port 1336!');
})
