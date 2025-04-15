// express :: server creation 

const express = require("express");
const app = express();

const port = 1010;
const hostname = "localhost";

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
});
app.get("/product", (req, res) => {
  res.send("<h1>Product Page</h1>");
});

app.listen(port, () => {
  console.log(`server is runing on the ${hostname}:${port}`);
});
