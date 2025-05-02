const http = require("http");
const fs = require("fs");

const myApp = http.createServer((req, res) => {
  const log = `${Date.now().toString()} :: request is coming on :: ${req.url}\n`;
  fs.appendFile("./log.txt", log, (err) => {
    if (err) {
      console.error("Oops!!", err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    } else {
      if (req.url === "/") {
        res.end("Home page");
      } else if (req.url === "/about") {
        res.end("About page");
      } else {
        res.statusCode = 404;
        res.end("404 Not Found!!");
      }
    }
  });
});

module.exports = myApp;
