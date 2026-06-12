const http = require('http');
const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, 'dist');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  if (urlPath.endsWith('/')) urlPath += 'index.html';
  if (!path.extname(urlPath)) {
    const candidate = path.join(DIST, urlPath, 'index.html');
    if (fs.existsSync(candidate)) urlPath += '/index.html';
    else urlPath += '.html';
  }
  
  const filePath = path.join(DIST, urlPath);
  const ext = path.extname(filePath);
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found: ' + urlPath);
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(4321, '0.0.0.0', () => {
  console.log('WegoFulfill static server running at:');
  console.log('  http://localhost:4321/');
  console.log('  http://192.168.5.50:4321/');
});
