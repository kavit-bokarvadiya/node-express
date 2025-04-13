// file system module

// reading file as --->> async way
// check how to work call back function --> ex -- hotel waiter

// module "fs" ::

// The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.

// To use the promise-based APIs:

// import * as fs from 'node:fs/promises';
// To use the callback and sync APIs:

// import * as fs from 'node:fs';

// All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM)

const fs = require("fs"); // fs - module

console.log("Read start");
fs.readFile(
  "input.txt", // file name
  // call back function
  function (err, data) {
    if (err) {
      console.log("error :: ", err);
      return err;
    }
    console.log("data :: ", data.toString());
    console.log("read done");
    return data;
  }
);
console.log("other stuff");

/*
Read start
other stuff
data ::  i am kavit bokarvadiya
from xyz
persuing m.sc it
read done 
*/
