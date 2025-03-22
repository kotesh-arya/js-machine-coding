
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


// ----------------Objects (Object referencing, copying, cloning)---------------

// Understanding Object Referencing


// One of the fundamental differences of objects versus primitives is that OBJECTS ARE STORED AND COPIED BY REFERENCE, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.

// A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

// When an object variable is copied, the reference is copied, but the object itself is not duplicated.

// Cloning Object

// 1. Using for-in loop
let user = {
    name: "arya",
    age: 30
}

let clone = {};


for (let key in user) {
    console.log(key, "object key");
    clone[key] = user[key]
}

console.log("cloned object", clone);

// 2. Using Object.assign()

let person = {
    name: "manoj tiwari",
    age: 23
}

let human = Object.assign({}, person);

console.log("human", human);

// But this cloning will not work for objects which have property with an object as a value. 

let user1 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone1 = Object.assign({}, user1);

alert(user1.sizes === clone1.sizes); // true, same object

//   Deep cloning a nested object

function deepClone(obj) {
    // If obj is not an object or is null, return it directly (primitive values)
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    // Handle Arrays
    if (Array.isArray(obj)) {
        return obj.map(deepClone);
    }

    // Handle Objects
    let clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]); // Recursively clone properties
        }
    }
    return clonedObj;
}


// Example Usage
let original = {
    name: "Alice",
    age: 25,
    address: {
        city: "New York",
        zip: 10001
    },
    hobbies: ["reading", "traveling"],
    active: true
};

let cloned = deepClone(original);

// Modify cloned object
cloned.address.city = "Los Angeles";
cloned.hobbies.push("coding");

console.log(original.address.city);  // Output: "New York" (unchanged)
console.log(original.hobbies);       // Output: ["reading", "traveling"] (unchanged)
console.log(cloned.address.city);    // Output: "Los Angeles"
console.log(cloned.hobbies); 