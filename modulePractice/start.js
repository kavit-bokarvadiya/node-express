const sumOfArray = require('./sumOfArray');
const product = require('./product');

const sum = sumOfArray([10, 20, 30, 40, 50]);
const productResult = product([10, 20, 30, 40, 50]);

console.log("the sum of array is :: ", sum);
console.log("the product of array is :: ", productResult);