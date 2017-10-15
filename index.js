var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Hello,'+ req.headers['user-agent']+'!');
  res.send('<h1>Hello, World!</h1><p>From '+process.env.PARADROP_CHUTE_NAME+'</p>')
});

app.listen(3000, function() {
  console.log('Listening on port 3000.');
});
