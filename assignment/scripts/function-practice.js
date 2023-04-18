  console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test

console.log('Test - should say "Hello World!"');


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
let givenName = 'Steven'
function helloName(name) {
  console.log(`Hello, ${ name }`);
}

// Remember to call the function to test
helloName(givenName)

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber+secondNumber;
}
console.log(addNumbers(1,2))

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber){
  return firstNumber*secondNumber*thirdNumber;
}
console.log(multiplyThree(1,2,3))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[array.length-1];
}
console.log(getLast([1,5,8,6]))

console.log(getLast([]))

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  let i=0
  let isTrue=false;
  while (i<array.length) {
    if (array[i] === value) {
      isTrue=true;
    }

    i++;
  }
  return isTrue;
}

console.log(find(2,[1,2,3,4]))
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let returnValue=false;
  let firstLetter = string.slice(0,1)
  if (firstLetter === letter) {
    returnValue = true;
  }
  return returnValue;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(givenArray) {
  let sum = 0
  let i = 0
  while (i < givenArray.length) {
    sum += givenArray[i];
    i++;
  }
  // TODO: loop to add items
  return sum;
}
console.log(sumAll([1,3,5,7]))
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function keepItPositive (mixedArray) {
  let returnArray = [];
  let i = 0;
  while (i<mixedArray.length) {
    if(mixedArray[i] > 0) {
      returnArray.push(mixedArray[i]);
    }
  i++;
  }
  return returnArray;
}
console.log(keepItPositive([2,-3,5,8,-5,0,5,0.1]));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){
  let total = 0;
  let i = 0
  let length=numbers.length
  for (let i = 0; i < length; i++) {
    total += numbers[i] * numbers[i];
  }
  return total;
}
let testNumber=[11,1];
console.log(squareSum(testNumber));

//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
//Note: If the number is a multiple of both 3 and 5, only count it once.
function solution(number){
  if(number<0) {
    return 0;
  }
  else {
    number=number-1;
    let highest5=number-number%5;
    let highest3=number-number%3;
    let highest15=number-number%15;
    return ((highest5+5)/2)*(highest5/5)+((highest3+3)/2)*(highest3/3)-((highest15+15)/2)*(highest15/15);
  }
}

console.log(solution(330));