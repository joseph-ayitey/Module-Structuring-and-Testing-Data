// Predict and explain first...
//  =============> write your prediction here
  /*The function capitalize is trying to redeclare the variable 'str' inside its scope, which will cause a syntax error.
  This is because 'str' is already declared as a parameter of the function.
  To fix this, we should use a different variable name for the new string we are creating.
  After fixing the error, the function should correctly capitalize the first letter of the input string*/
 

// call the function capitalize with a string input
// interpret the error message and figure out why an error is occurring

function capitalize(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// =============> write your new code here
