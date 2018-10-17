const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const PORT = 8080;
const mime = require('mime-types')

app.use(express.static(path.resolve(__dirname,'../dist'),  {
  maxAge: '1y',
  setHeaders: function (res, path) { //skip *.html
    if (mime.lookup(path) === 'text/html') {
      res.setHeader('Cache-Control', 'public, max-age=0')
    }
  }
}));
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})
var server = http.createServer(app);
server.listen(PORT, function() {
  console.log("Listening on http://127.0.0.1:%j", server.address().port);
});