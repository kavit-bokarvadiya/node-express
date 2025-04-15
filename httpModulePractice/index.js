// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.write("<h1>Home page</h1>");
//   } else if (req.url == "/about") {
//     res.write("<h1>About page</h1>");
//   }
//   res.end();
// });

// server.listen(5000);
// console.log("http server is reaning on the port number 5000");

// const http = require('http');

// let portNumber = 5002;

// const server = http.createServer((req, res) => {
//     if(req.url == '/'){
//         res.write('home page');
//     }
//     res.end();
// });

// server.listen(portNumber);
// console.log("http server is run on the port number 5002");

// const http = require('http');

// const port = 3000;
// const hostname = 'localhost';

// const server = http.createServer((req, res) => {
//     if(req.url == '/'){
//         res.statusCode = 200;
//         res.setHeader("content-type", "text/plain");
//         res.end("hello world");
//     }
// });

// server.listen(port, () => {
//     console.log(`server is running at ${hostname} : ${port}`);
// });

// code : 2

const http = require("http");
const hostname = "localhost";
const port = 3002;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end("<h1>ji ha me hu...</h1>");
  }
});

server.listen(port, () => {
  console.log(`server is runnig on ${hostname}:${port}`);
});
