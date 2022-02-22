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
// if esle conditions 
if (/* condition  eg is given*/ a === 1){
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
array,slice(/* enter the index of the array to rturn that specific elemment */);
// while loops
while (/* condition  eg is given*/ a === 1){
    // code will execute until the above condition is false
}
//for loops
for (Start ; end ; change){ // eg for ( i=0; i<5; i++){
    // code for for loop        console.log(i)
}                             // }
parseInt(variable); // converts varibale to integer
parseFloat(variable); // converts variable to float
String(number); // converts number to string


// integration of js with html
/* different methods of integration js into html
1. inline js

            eg: <body onload="alert('hello dinesh');">

            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>website</title>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body onload="alert('hello dinesh');">  here is the js code
                <h1>hello</h1>
            </body>
            </html>
        it is not a very good practise of using inline js, it is difficult to debug

2. internal js

            eg: <script type="text/javascript">
                alert("hi i am dinesh");
                </script>

            <!DOCTYPE html>
            <html lang="en">
            <head>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <h1>hello</h1>
                <script type="text/javascript">
                    alert("hi i am dinesh");       here is the js code
                </script>
            </body>
            </html>

3. external js

            eg: <script src="index.js"></script>  we add js file in the repo and indicate that in scr 

            <!DOCTYPE html>
            <html lang="en">
            <head>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <h1>hello</h1>
                <script src="index.js"></script>    here is the js code file
            </body>
            </html>
*/

document.querySelector("h1").innerHTML = "bye dinesh";  // document is html file, queryselector selects the tag, innerhtml is the value inside the h1 tag, at last we are changing it

// Document Object Model (dom)
/*
the entire html file in converted to dom by default in the brwser, each of the tag is split, for eg: html has 2 childs >> head and body, again each of head and body has children
with the help of dom we can access individual species of child and parent with dom

        eg: html code html code has multiple elements and tags inside it they are all random so to indicate multiple childs and parents for dom 

            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Website</title>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <h1 id="title">Hello </h1>
                <input type="checkbox">
                <button class="btn">CLick me</button>
                <ul id = "table">
                    <li class="item">
                        <a href="https://www.google.com">Google</a>
                    </li>
                    <li class="item">blank1</li>
                    <li class="item">blank2</li>
                </ul>
                <script src="index.js"></script>
            </body>
            </html>

        below will be a understading of js using the above html file
*/

document; // it returns the entire html file for which js file is used
document.firstElementChild; // it returns all the contents inside the html tag because document is the entire html and its first and only child is html tag
document.firstElementChild.firstElementChild; // it returns all the contents inside head tag because, document is html file, first child is html and again first child for html tag is head tag 
document.firstElementChild.lastElementChild; // it returns all the contents inside body tag because, document is html file, first child is html and last child for html tag is body tag 
// this can go as many levels as we can, this can keep on continue
// once we get into the element that we need, we can manipulate it by changing it as we needed for example
var h1Tag = document.firstElementChild.lastElementChild.firstElementChild; // this will return h1 tag with value hello from above code, the moment goes as html file>> html tag >> body tag >> h1 tag
// now we have our h1 tag stores in variable h1Tag we can use js to edit and manipulate the value inside the tag fro example
h1Tag.innerHTML = "Bye Bye Dinesh"; // h1 tag vale is now changed
// we can not only change values but also can do many other such as
h1Tag.style.colour = "red"; // this changes colour of h1 tag to red
document.querySelector("input").click(); // this searches for a query named input from the entire html document and then perform operation click on that, thish automatically checks the tick box

// different methods of selecting elements inside the dom
document.getElementsByTagName("li"); // returns all elements with tag name li in an array
document.getElementsByTagName("li")[0]; // we can find any individual element in the array formed by mentioning the count in array
document.getElementsByClassName("btn"); // retunrs all elements with class name btn in an array
document.getElementsByClassName("btn")[0]; // we can find any individual element in the array formed by mentioning the count in array
// we can add .style.colour to the elements above and change colours as well

