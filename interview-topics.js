
function sample() {
    var age = 99;
    console.log(age, "<---age here");  // 99
    if (true) {
        let group = "spartans";

    }
    // console.log("let variable accessed outside a code block {}", group); // ReferenceError: group is not defined
}
// console.log(age, "<---age here"); // ReferenceError: age is not defined

// Variables defined with var are function scoped, which means the variable declared using var inside a function cannot be accessed out of that function(function scope).
sample();


// Default behaviour in javascript language of moving the function and variable declarations to the top of their scope is Hoisting.

// Function Hoisting: FUNCTION DECLARATIONS ARE FULLY HOISTED. ( ⚠️ Not expressions )

// Variable Hoisting:
// - Var declared variables are hoisted but uninitialized.
// - Let and const declared variables are hoisted but inaccessible due to TDZ.

// Few mind-bending questions on Hoisting in JS

console.log(foo); // undefined -  as foo will be hoisted but unintialized
var foo = "Hello!";

// -----------------------------------
console.log(myFunc);  // [Function: myFunc]
console.log(myVar); // undefined

function myFunc() {
    return "I am a function";
}

var myVar = "I am a variable";


// -----------------------------------
function test() {
    console.log(a);// undefined
    var a = 10;
    console.log(a); // 10
}
test();

// -------------------------------

// console.log(foo1()); // I am a declaration!
// console.log(foo2()); // TypeError: foo2 is not a function

function foo1() {
    return "I am a declaration!";
}

var foo2 = function () {
    return "I am an expression!";
};


// -------------💣 HOISTING IN LOOPS  💣----------------------
for (var i = 0; i < 3; i++) {
    // setTimeout(() => console.log(i), 1000);
}
//   💡 Think: Why does it log 3 3 3 instead of 0 1 2 ?

// Its a two step process
// Step-1 : The variable i declared using var, so it is function  scoped and not block scoped, which means for all the iterations(blocks) of code, i will be same.
// Step-2 : Coming to the setTimeout, even before the line of code that logs the i value, gets executed. The loop will not wait as loops are synchronous in js, the value of I will be 3 before the 1000ms time elapsed.

// Hence the value of i logged three times will be 3 3 3



// 21 March 2025 [Friday]

// console.log(0.1 + 0.2);


// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

// Examples of its work:

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525



function random(start, end) {
    console.log(start, end);
    // 💎If we multiply a random number from using ramdom method from 0 to 1
    //  then on multiplying that number with a integer will give a RANDOM NUMBER LESSTHAN the multiplied integer.

    console.log(start + Math.random() * (end - start));
}
// random(1,4);


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(randomInteger(1, 4), "comment result");
let startRandomNum = Math.random() * 5;
