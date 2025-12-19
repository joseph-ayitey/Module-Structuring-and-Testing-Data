// A set of words can be grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all caps with underscores instead of spaces.

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"

// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

// You will need to come up with an appropriate name for the function
// Use the MDN string documentation to help you find a solution
// This might help https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

function toUpperSnakeCase(inputString) {
  return inputString
    .toUpperCase()
    .replaceAll(" ", "_");
} 

module.exports = {
  toUpperSnakeCase
};  


if (require.main === module) {
  const assert = require("assert");

  try {
    assert.strictEqual(
      toUpperSnakeCase("hello there"),
      "HELLO_THERE"
    );
    assert.strictEqual(
      toUpperSnakeCase("lord of the rings"),
      "LORD_OF_THE_RINGS"
    );
    assert.strictEqual(
      toUpperSnakeCase("a quick brown fox"),
      "A_QUICK_BROWN_FOX"
    );
    assert.strictEqual(
      toUpperSnakeCase("javascript is awesome"),
      "JAVASCRIPT_IS_AWESOME"
    );
    console.log("All tests passed!");
  } catch (e) {
    console.error("A test failed:");
    console.error(e.message);
  }
}   


//===Therefore===//
//.split(" ") breaks the string into an array of words

//.join("_") joins those words using underscores

//.toUpperCase() converts all letters to uppercase, as described in the MDN documentation

//This produces the required UPPER_SNAKE_CASE output.