const http = require("http");
const express = require("express");
// basically app is  a handler function
/*

    An example of a handler function

    const http = require("http");

    function HandlerFunction(req, res){
        console.log("request is comming on server");
        if(req.url === '/'){
            res.end("home page");
        }else {
            res.end("404 page not found!!");
        }
    }

    const App = http.createServer(HandlerFunction);
*/

// so in the express here app is a handler function --> it is handle a requst
// const app = express(); --> i have create this function as a appHandlerFunction

/*
    --> for understanding purpose

    const appHandlerFunction = express();

    function handler(req, res){
    }

    appHandlerFunction.get("/", handler);  --> here handler function pass as argument --> basically is i can not write in this way then handler function write as callback function basically hanler function is callback function but i have write in the different way 

*/

// here i can not write seperately handler function but i have write directly callback function and remember here callback function is handler function

const appHandlerFunction = express();

appHandlerFunction.get("/", (req, res) => {
  return res.send(`hello your name is ${req.query.name} you are from ${req.query.village}`);
//   o/p :: hello your name is kavit you are from xyz
});

appHandlerFunction.get("/about", (req, res) => {
  return res.send("hello from about page");
});

// for understanding purpose i'll use http server 

// function handlerFunction() {}

// const myServer = http.createServer(handlerFunction);

// myServer.listen(8000, (err) => {
//   if (err) {
//     console.error("oops!!", err);
//   } else {
//     console.log("server is running on port :: 8000");
//   }
// });

appHandlerFunction.listen(8000, (err) => {
  if (err) {
    console.error("oops!!", err);
  } else {
    console.log("server is running on port :: 8000");
  }
});
