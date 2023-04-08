const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(async (req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === '/create-file') {
    await fs.promises.writeFile('new-file.txt', '');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('new-file.txt created');
  } else if (pathname === '/write-file') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      const { data } = JSON.parse(body);
      await fs.promises.writeFile('new-file.txt', data);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('data written to file');
    });
  } else if (pathname === '/rename-file') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      const { newName } = JSON.parse(body);
      await fs.promises.rename('new-file.txt', newName);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('file renamed');
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
