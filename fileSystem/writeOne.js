// file write --> 1) sync  2) async

// in this case file data is override
// const fs = require('fs');

// const intro = "hello me hu oggi and coc";

// fs.writeFile('input.txt', intro, function(err)
// {
//     if(err)
//     {
//         console.log("writing is not done!!");
//     }
//     console.log("writing is done!!");
// });

// but how file data is not override

// we have use appendFile() function

const fs = require("fs");
let myName = "--kavit bokarvadiya";
console.log("start");
fs.appendFile("input.txt", myName, "utf-8", function (err) {
  if (err) {
    console.log("somethink went to wrong!!");
  }
  console.log("appending is done!!");
  console.log("done");
});
console.log("other stuff");

/*
start
other stuff
appending is done!!
done
*/

// deleting file

// fs.unlike('input.txt', function(err){
// });