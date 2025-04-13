// low lavel --> file reading

// most usable method is readfile method

// read = openFile + readFile

/*
  fs.read(
    fd,         // file descriptor
    buf,        // buffer to store the data
    0,          // offset in buffer to start writing
    buf.length, // how many bytes to read
    0,          // position in file to start reading
    function (er, bytes) {

*/

const fs = require("fs");

// Create a buffer with 1024 byte size
const buf = Buffer.alloc(1024);

// Open the file in read+write mode
fs.open("input.txt", "r+", function (err, fd) {
  if (err) {
    return console.error("Error in file open:", err);
  }
  console.log("File is open!!!!");

  // Read from the file
  fs.read(fd, buf, 0, buf.length, 0, function (er, bytes) {
    if (er) {
      return console.error("Error in file read:", er);
    }

    console.log("Number of bytes read:", bytes);

    fs.close(fd, function (erClose) {
      if (erClose) {
        console.log("error in close");
      } else {
        console.log("error not occur in closing");
      }
    });
  });
});

/*

File is open!!!!
Number of bytes read: 50
Data read from file:
i am kavit bokarvadiya
from xyz
persuing m.sc it

*/
