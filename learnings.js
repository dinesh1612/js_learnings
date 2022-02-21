// js is an intrepreted programming langugae, code is executed line by line
alert("dinesh reddy"); // popup alert
prompt("what is your name?") // take input from user
typeof(123) // var type number
typeof("dinesh") // var type string
typeof(true) // var type boolean
var myName = "dinesh Reddy"; // defying variable
myName.length; // lenghth of string
myName.slice(0,1); //slice a string first number is valid second number is not used it implies range
myName.toLowerCase(); //to lower case
myName.toUpperCase(); // to upper case
// in java script variable name starts with small letter and then for every new word captial letter is the indicative
function myFunction() {
    // write you code here // basic syntax of function // defyining the function
}
myFunction(); // this is how function is called
var output = myFunction();//we can use return inside the function to give an output and save it in an variable
console.log(myName); // this shows the value of myName variable in console
var floatvalue = 10.23564
var intvalue = Math.floor( floatvalue ); // 10
var intvalue = Math.ceil( floatvalue ); // 11
var intvalue = Math.round( floatvalue ); // basic math rounding style
var intvalue = Math.trunc( floatvalue ); // it gives the integer value of the decimal number and eliminates the decimal part
Math.pow(base, power) // to calculate power
Math.random(); // generates random 16 digit decimal value from 0 to 1 but 1 not inclusive
// if we want to have a random of range (1,6) or (1, 100) or any range starting from 1 multiply the random number generated with the max value in range 
// Math.random();* (6 or 100 as you wish to do so)
// if esle conditions in js
if (/* condition */){
    // write some code if if is true
}
else {
    // write some code if if is false
}
// in js there is a difference between == and === 
// when using == is only checks the var (eg 1 == "1" returns true) where as (1 === "1" return false)
// == checks only the value, where as === checks value and data type of the value as well
var array = ["dinesh", "reddy", "reddem"] // define array
array.includes("dinesh") // returns true or false
array.push("satyam") // satyam string is added to the array 
array.pop(); // it removes the last element in array
