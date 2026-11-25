import { createServer } from 'node:http';
// import { mainModule } from 'node:process';  <-- Shu qatorni o'chiring

const hostname = '127.0.0.1';
const port = 4000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("John");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});