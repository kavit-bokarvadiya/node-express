// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// const mul = (a, b) => {
//   return a * b;
// };

// expotr this function because function is private if we export the function then function if public

// module.exports = { add, sub, mul };

// way :: 2 :: anonymous arrow function

exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
exports.mul = (a, b) => a * b;