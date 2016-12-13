var express = require('express');
var app = express();
var router = express.Router();

router.use('/home', express.static('client'));

var port = (process.env.PORT || 1336);

app.listen(port, function(){
  console.log('app is listening to port 1336!');
})
