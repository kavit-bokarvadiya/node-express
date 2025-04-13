// os module: it is use for check the info about operating system

const os = require('os');

console.log("arch of op :: ", os.arch());

console.log("free meamory in op :: ", os.freemem());

console.log("total meamory in op :: ", os.totalmem());

// console.log("network interface :: ", os.networkInterfaces());

console.log("endiannes :: ", os.endianness());

console.log("hostname :: ", os.hostname());

console.log("type :: ", os.type());

console.log("platform :: ", os.platform());

console.log("release :: ", os.release());