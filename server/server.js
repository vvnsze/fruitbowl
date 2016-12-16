var express = require('express')
var app = express()
var router = express.Router()

var path = require('path')

router.use('/home', express.static(path.join(_dirname, 'client')));

const port = (process.env.PORT || 1336);

app.listen(port, function(){
  console.log('app is listening to port 1336!');
})
