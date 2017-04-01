var express = require('express');
var app = express();
var dbconn = require('./api/config/connection.js')

app.use('/', express.static('public'))
app.use('/ops', express.static('ops_site'))

let lift = function(){
  var r_api = require('./api/r_api');
  app.use('/api/',r_api);
  app.listen(1337,function(){
    console.log("listening on 1337");
  });
};

// Use this for when you dont have MongoDb connection
lift();
// Uncomment and use this lift to have mongoDB Connection
//dbconn.connect(lift);
