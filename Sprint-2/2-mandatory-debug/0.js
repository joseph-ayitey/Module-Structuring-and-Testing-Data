// Predict and explain first...

// =============> write your prediction here
//The output will be "The result of multiplying 10 and 32 is undefined" because the multiply function does not return a value, it only logs the product to the console.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
 //The function `multiply(a, b)` only logs the product using console.log
// but does not return anything, so its default return value is `undefined`.
// When used inside the template literal, `${multiply(10, 32)}` evaluates to `undefined`.

// Finally, correct the code to fix the problem
//  =============> write your new code here



