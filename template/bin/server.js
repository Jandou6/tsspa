const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.static(path.resolve(__dirname,'../dist')));
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})
var server = http.createServer(app);
server.listen(PORT, function() {
  console.log("Listening on http://127.0.0.1:%j", server.address().port);
});