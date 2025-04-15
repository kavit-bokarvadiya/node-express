// const fs = require("fs");

// fs.open("input.txt", "r+", (err, fd) => {
//   if (err) {
//     console.log("error");
//   }
//   console.log("file open succussfully");
// });

/*
PS K:\coding\Main Code\MERN_stack_pw\nodejs_express\fileSystem> node fileOpenPractice.js
file open succussfully
*/

// program : 2

const fs = require("fs");
var buf = Buffer.alloc(1024); // use Buffer.alloc instead of new Buffer (deprecated)

fs.open("input.txt", "r+", (err, fd) => {
  if (err) {
    console.log("Something went wrong while opening the file!");
    return;
  }

  console.log("File opened successfully");
  console.log("Reading the file...");

  fs.read(fd, buf, 0, buf.length, 0, (err, bytesRead) => {
    if (err) {
      console.log("Something went wrong while reading the file!");
    } else {
      if (bytesRead > 0) {
        console.log("File contents:");
        console.log(buf.slice(0, bytesRead).toString());
      }
    }

    // Always close the file after reading
    fs.close(fd, (err) => {
      if (err) {
        console.log("Error closing the file!");
      } else {
        console.log("File closed successfully.");
      }
    });
  });
});
