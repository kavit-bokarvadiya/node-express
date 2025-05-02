const fs = require("fs");

// sync and async way --> blocking and non-blocking request

// 1) creation of a file

// sync call
// fs.writeFileSync("./try.txt", "hello world!!");

// async call
// fs.writeFile(".trry.txt", "hello ji kese ho sare???... this is async way to write a file", (err) => {});

// fs.writeFile(
//   "./final.txt",
//   "badiya ab ham fs module sikh rahe he...",
//   (err, result) => {
//     if (err) {
//       console.log("error :: ", err);
//     } else {
//       console.log("complate task");
//     }
//   }
// );

// 2) read file

// sync way :: retun walue so in can store in the result

// const result = fs.readFileSync("./try.txt", "utf-8");
// console.log(result);

// async way :: it can not return any value so we have use call back function

// utf-8 is encoding way for the string file reading

// fs.readFile("./.trry.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("error :: ", err);
//   } else {
//     console.log(result);
//   }
// });

// --> basically in the writefile and writeFileSync write the content but value is alwyas override

// but we have use append then value don't override.

// sync way for append file

// fs.appendFileSync("./final.txt", `achha ham bhi badiya he\n`);

// async way for append file

// fs.appendFile("./final.txt", `helo ji ham to he badiya\n`, (err, result) => {
//   if (err) {
//     console.log("error :: ", err);
//   } else {
//     console.log("append done");
//   }
// });

// blocking and non - blocking request

// blocking request --> sync way

// console.log("start");
// const result = fs.readFileSync("./final.txt", "utf-8");
// console.log(result);
// console.log("end");

// non-blocking request --> async way

console.log("start");
fs.readFile("./final.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("error :: ", err);
  } else {
    console.log(`achha padh lo -->\n`, result);
  }
});
console.log("end");
