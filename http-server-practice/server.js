const myApp = require("./index");
const PORT = require("./config");

myApp.listen(PORT, (err) => {
  if (err) {
    console.error("getting error :: ", err);
  } else {
    console.log("server is running on localhost :: ", PORT);
  }
});
