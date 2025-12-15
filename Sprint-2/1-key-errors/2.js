
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// The error occurs because function parameters should be variable names, not literal values.

// Finally, correct the code to fix the problem
// =============> write your new code here
function square(num) {
    return num * num;
}

// Test the corrected function
console.log(square(4)); // Should output 16 




