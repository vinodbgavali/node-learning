const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("wecome to home page");
  }
  if (req.url === "/about") {
    res.end("about us page");
  }
  res.end(`<h1>Error!</h1>`);
});

server.listen(5000);