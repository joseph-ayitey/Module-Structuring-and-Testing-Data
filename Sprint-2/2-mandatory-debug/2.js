// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The function will always return "3" for every number,
// because `num` is always 103 inside the function.


const num = 103;

function getLastDigit() {
  return num.toString().slice(-1); 
  
}


console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The output is:
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// The function `getLastDigit` does not accept any parameters,
// so it always uses the constant `num` defined outside (103).
// The argument passed to `getLastDigit(42)` is ignored.
// Therefore, the function always returns the last digit of 103, which is "3".

// Finally, correct the code to fix the problem
// =============> write your new code here

function getLastDigit(num) {
  return num.toString().slice(-1); 
}   // This function now takes a parameter 'num' and returns its last digit.

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// The function did not accept any parameters, so it always used the constant `num` (103).
// By adding a parameter to the function, it can now accept different numbers
// and return their respective last digits correctly.
// The output will now be:
// The last digit of 42 is 2
// The last digit of 105 is 5
// The last digit of 806 is 6 
// which is the expected behavior.
