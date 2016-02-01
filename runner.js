var args = require('argify'),
    factorialFun = require('./factorialFun');

if(!args.num) {
    console.log("\nmissing --num={x} x is any positive integer");
    return;
}

var x = factorialFun.factorial(args.num);
console.log("factorial of "+args.num+" is "+x);

var y = factorialFun.sumOfDigit(x);
console.log("sum of "+x+" is "+y);


