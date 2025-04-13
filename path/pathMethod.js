// __filename --> it is use for the at which place current file is avalible

const path = require("path");


const currentFilePath = __filename;
console.log(currentFilePath);
console.log("--------------------------------------------");

// o/p::

/*
    k:\coding\Main Code\MERN_stack_pw\nodejs_express\path\pathMethod.js
*/


// method :: 1 :: path.basename(filename);

let basename = path.basename(currentFilePath);
console.log(basename); // o/p :: pathMethod.js

// method :: 2 :: path.basename(filename, 'extention');
// basename without extention

let basenameWithOutExtention = path.basename(currentFilePath, '.js');
console.log(basenameWithOutExtention); // pathMethod

// method :: 3 :: path.dirname(filename);
// directory name

let dirName = path.dirname(currentFilePath);
console.log(dirName); // k:\coding\Main Code\MERN_stack_pw\nodejs_express\path

// method :: 4 :: path.extname(filename);

let extname = path.extname(currentFilePath);
console.log(extname); // .js


let filePath = path.format(
    {
        dir : '/home/html',
        base : 'index.html'
    }
);
console.log(filePath); /// home/html\index.html