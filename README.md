#Overview
This is a simple program that takes a factorial of a number and returns the sum of the digits 
example 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720. 7 + 2 + 0 = 9.

##Requirements
must have node.js installed

##Install
> npm install

##Usage
> node runner num={x}

x is any positive integer. 

#example
> node runner.js --num=6
> factorial of 6 is 720
> sum of 720 is 9

##test
>npm test

#Description

##How I went about the problem..
Knowing the factorial function, I created a recursive function that would take the input, subtract 1, and keep multiplying until you reach 1. 
This will result in the value of the factorial. I then converted this number into a string then split the string by each character. 
This would allow me to have each digit independently. After taking each digit I would add them together and create a sum and this would be the answer. 
During the process there are assertions to insure the value the user inputted was valid. If for whatever reason there was an invalid input, an error would return.

##Testing
For test I used the mocha framework and should.js. Should.js and mocha are libraries I used in the past. 
I started with a positive test that would return correct and expected answer, then my remaining test were trying to break the functions insuring errors would return and cover all forms of input.
