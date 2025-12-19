// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs   


function toPounds(kilograms) {
    const pounds = kilograms * 2.20462;
    return pounds;
}

// Example calls to the function
console.log(toPounds(5)); // Should print approximately 11.0231
console.log(toPounds(10)); // Should print approximately 22.0462
console.log(toPounds(0)); // Should print 0


//===Explanation===//

//toPounds is the function name (as required).

//kilograms is a clearly named parameter.

//The function converts kilograms to pounds.

//The function is called several times with different values to confirm it works.
