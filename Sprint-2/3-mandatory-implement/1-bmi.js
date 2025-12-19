// Below are the steps for how BMI is calculated

// The BMI calculation divides an adult's weight in kilograms (kg) by their height in metres (m) squared.

// For example, if you weigh 70kg (around 11 stone) and are 1.73m (around 5 feet 8 inches) tall, you work out your BMI by:

// squaring your height: 1.73 x 1.73 = 2.99
// dividing 70 by 2.99 = 23.41
// Your result will be displayed to 1 decimal place, for example 23.4.

// You will need to implement a function that calculates the BMI of someone based off their weight and height

// Given someone's weight in kg and height in metres
// Then when we call this function with the weight and height
// It should return their Body Mass Index to 1 decimal place

function calculateBMI(weight, height) {
    // return the BMI of someone based off their weight and height
}

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return parseFloat(bmi.toFixed(1));
}

// Example usage:
console.log(calculateBMI(70, 1.73)); // Should output 23.4
console.log(calculateBMI(80, 1.8));  // Should output 24.7
console.log(calculateBMI(60, 1.6));  // Should output 23.4
// This function calculates the BMI by dividing the weight by the square of the height
// and then rounds the result to one decimal place before returning it.

//Explanation brief:

// Square the height: height * height
//Divide weight by squared height
//Format to 1 decimal place using toFixed(1)
//Convert back to a number with Number(...)

//example:

calculateBMI(70, 1.73); // 23.4
calculateBMI(80, 1.8);  // 24.7
calculateBMI(60, 1.6);  // 23.4



