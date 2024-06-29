// Write a function named sumDigits which takes a number as input and returns the sum of the absolute
// value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.


// we need a method that will return the absolute value of a number
// for that we will use Math.abs()
// we will need to convert the number to a string
// next we need to seperate the string into individual chararacters
// we then need to convert the characters back into numbers
// we set our accumulator to 0, we add our numbers to the accumulator
// at this point Math.abs() will return the added value of the numbers
function sumDigits(number){
    return Math.abs(number).toString().split('').reduce(function(a, b){
        return +a + +b
    }, 0)
}