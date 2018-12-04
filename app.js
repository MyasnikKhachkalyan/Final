const express = require('express');
const path = require('path')
const serveStatic = require('serve-static');
const app = express();

app.use(serveStatic(path.join(__dirname, '/public')));

app.get('/', function(request, response) {
    response.sendfile(path.join(__dirname, 'public/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

console.log(__dirname);
