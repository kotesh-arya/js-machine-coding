
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

console.log(foo1()); // I am a declaration!
console.log(foo2()); // TypeError: foo2 is not a function

function foo1() {
    return "I am a declaration!";
}

var foo2 = function () {
    return "I am an expression!";
};


// -------------💣 HOISTING IN LOOPS  💣----------------------
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
//   💡 Think: Why does it log 3 3 3 instead of 0 1 2 ?

// Its a two step process
// Step-1 : The variable i declared using var, so it is function  scoped and not block scoped, which means for all the iterations(blocks) of code, i will be same.
// Step-2 : Coming to the setTimeout, even before the line of code that logs the i value, gets executed. The loop will not wait as loops are synchronous in js, the value of I will be 3 before the 1000ms time elapsed.

// Hence the value of i logged three times will be 3 3 3