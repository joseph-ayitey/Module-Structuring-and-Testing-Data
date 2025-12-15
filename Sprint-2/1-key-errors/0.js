// Predict and explain first...
//  =============> write your prediction here
  /*The function capitalize is trying to redeclare the variable 'str' inside its scope, which will cause a syntax error.
  This is because 'str' is already declared as a parameter of the function.
  To fix this, we should use a different variable name for the new string we are creating.
  After fixing the error, the function should correctly capitalize the first letter of the input string*/

  // for example:
  function capitalize(str) {
  let str = ... // redeclaration
}
 

// call the function capitalize with a string input
// interpret the error message and figure out why an error is occurring

function capitalize(str) {
  let capitalizedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalizedStr;
}

// =============> write your explanation here
  /*The function parameter str is already a variable. Declaring let str inside the function attempts to redeclare the same identifier in the same scope, which JavaScript does not allow. This causes a syntax error before the code runs*/

// =============> write your new code here
function capitalize(str) {
  let capitalizedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalizedStr;
}

function capitalize(str) {
console.log(capitalize("hello")); // Output: "Hello"  
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

//You can reassign function parameters, but you cannot redeclare them with let or const in the same scope.

