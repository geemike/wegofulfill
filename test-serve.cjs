const http = require('http');
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from WegoFulfill!');
}).listen(4321, '0.0.0.0', function() {
  console.log('Listening on 4321');
});
