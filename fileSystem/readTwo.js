// file read as sync way

const fs = require("fs");
console.log("read start");
var data = fs.readFileSync("input.txt");
console.log("data :: ", data.toString());
console.log("read done");
console.log("other stuff");

/*
read start
data ::  i am kavit bokarvadiya
from xyz
persuing m.sc it
read done
other stuff
*/