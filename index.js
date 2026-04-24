const http = require('http');
const server = http.createServer((req, res) => {
  res.end('API is running');
});
server.listen(3000);
