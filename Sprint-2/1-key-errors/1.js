// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
/*The function parameter 'decimalNumber' is already a variable. Declaring const decimalNumber = 0.5 inside the function attempts to redeclare the same identifier in the same scope, which JavaScript does not allow. This causes a syntax error before the code runs*/

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));      // "50%"
console.log(convertToPercentage(0.75));     // "75%"
console.log(convertToPercentage(0.3333));   // "33.33%"   
console.log(convertToPercentage(0.1));      // "10%"    
console.log(convertToPercentage(0));        // "0%"


