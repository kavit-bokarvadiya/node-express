const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.write("<h1>home page</h1>");
  } else if (req.url == '/about') {
    res.write("<h1>about page</h1>");
  } else if (req.url == '/admin') {
    res.write("<h1>admin page</h1>");
  }
  res.end();
});

server.listen(5005);
console.log("the server is running on port 5005");
