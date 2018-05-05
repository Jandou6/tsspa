const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const PORT = '8080';

app.use(express.static(path.resolve(__dirname,'../dist')));

var server = http.createServer(app);
server.listen(8080, function() {
  console.log("Listening on http://127.0.0.1:%j", server.address().port);
});