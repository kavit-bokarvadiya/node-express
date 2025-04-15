//  read file module

// asynchronious read

// const fs = require("fs");

// fs.readFile("input.txt", (err, data) => {
//   if (err) {
//     console.log("error");
//   }
//   console.log("asynchronious read :: ", data.toString());
// });

/*

asynchronious read ::  my name is kavit
i am from rajkot

*/

// synchronious read

// const fs = require("fs");
// var data = fs.readFileSync("input.txt");
// console.log(data.toString());

/*

my name is kavit
i am from rajkot

*/

// const fs = require("fs");

// fs.readFile("input.txt", (err, data) => {
//   if (err) {
//     console.log(error);
//   } else {
//     console.log(data.toString());
//   }
// });



const fs = require('fs');

var data = fs.readFileSync('input.txt');
console.log(data.toString());