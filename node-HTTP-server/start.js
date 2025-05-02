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



// creation of server with log :: in this server i have use the fs module

const http = require("http");
const fs = require("fs");

const myApp = http.createServer((req, res) => {
    const log = "";
});