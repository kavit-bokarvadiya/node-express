// entry point
// const http = require("http");

// // basically create server is request handler
// const myServer = http.createServer((req, res) => {
//   console.log("new request recived");
//   res.end("hello, from server");
// });

// myServer.listen(8000, (err) => {
//   if (err) {
//     console.error("something wont to wrong!!1");
//   } else {
//     console.log("all right!!");
//   }
// });

// task :: creation of log
// creation of server with log :: in this server i have use the fs module

const http = require("http");
const fs = require("fs");
const PORT = 8000;

// handler

/**
 *
 *  req --> get client side meta data from client to server
 *  res --> for response server to client
 *
 */

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} new request recived \n`;
  fs.appendFile("./log.txt", log, (err, data) => {
    if (err) {
      console.error("Error :: ", err);
    } else {
      switch (req.url) {
        case "/":
          res.end("home page");
          break;
        case "/about":
          res.end("about page");
          break;
        case "/contactus":
          res.end("contact us page");
          break;
        default:
          res.end("404 NOT FOUND!");
      }
    }
  });
});

myServer.listen(PORT, (err) => {
  if (err) {
    console.error("something won't to wrong!!");
  } else {
    console.log(`server is run on localhost :: ${PORT}`);
  }
});
