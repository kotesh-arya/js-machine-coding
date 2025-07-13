// // RajSanchit 🔸 25 Difficult JAVASCRIPT Interview Questions, 

// // Implement a chain calculator.

// //  Chain calculator is an object with methods that return the object itself with updated values:

// class ChainObjConstructor {

//     constructor() {
//         this.value = 0;
//     }
//     add = (num) => {
//         this.value += num;
//         return this;
//     }
//     subtract = (num) => {
//         this.value -= num;
//         return this;
//     }
//     multiply = (num) => {
//         this.value *= num;
//         return this;
//     }

//     getResult = () => {
//         return this.value;
//     }

// }




// let chainObj = new ChainObjConstructor();
// let chainObj1 = new ChainObjConstructor();
// let chainObj2 = new ChainObjConstructor();



// // console.log(chainObj.add);
// const result = chainObj.add(5).subtract(2).multiply(3).getResult();
// console.log(result);

// chainObj1.add(5);
// let result1 = chainObj1.getResult();
// console.log(result1);

// chainObj2.subtract(3);
// let result2 = chainObj2.getResult();
// console.log(result2);

// // ---------------------------------------------------------------------


// // Factory functions(functions that return objects on invocation) an alternative of classes in creating objects
// function createCounter() {
//     let count = 0;
//     return {
//         increment() { count++; return this; },
//         get() { return count; }
//     };
// }
// let counter1 = createCounter();
// console.log(counter1);
// console.log(counter1.get(), "value if the property in the created object instance BEFORE incermenting");
// console.log(counter1.increment());
// console.log(counter1.get(), "value if the property in the created object instance AFTER incermenting");

// // ---------------------------------------------------------------------

// Prototypes, Prototypal Inheritance
const animal = {
    eats: true
}
const rabbit = {
    jumps: true
}

rabbit.__proto__ = animal;

console.log(rabbit.eats); // true - inherited property from the prototype object


function greet(greeting) {
    return `${greeting} ${this.name} `;
}

let user = {
    name: "arya"
}


// call polyfill

Function.prototype.myCall = function (context, ...params) {
    if (typeof this !== "function") {
        throw new TypeError(this + " is not callable");
    }

    context = context || globalThis;

    const fnSymbol = Symbol();
    context[fnSymbol] = this;

    let result = context[fnSymbol](...params);

    delete context[fnSymbol];
    return result;

};
console.log(greet.myCall(user, "Hi"));  // Hi arya


// apply polyfill

Function.prototype.myApply = function (context, paramsArr) {
    if (typeof this !== "function") {
        throw new TypeError(this + " is not callable");
    }
    if (paramsArr !== undefined && !Array.isArray(paramsArr)) throw new TypeError("CreateListFromArrayLike called on non-object");

    context = context || globalThis;

    let fnSymbol = Symbol();
    console.log("symbol returned", fnSymbol);

    context[fnSymbol] = this;

    let result = context[fnSymbol](...paramsArr);

    delete context[fnSymbol];

    return result;

};
console.log(greet.myApply(user, ["Hello"]));  // Hello arya 


// bind polyfill

Function.prototype.myBind = function (context, ...presetArgs) {
    let functionToBeBounded = this;
    if (typeof functionToBeBounded !== "function") throw new TypeError("Bind must be called on a function");

    return function boundedFunction(...laterArgs) {
        return functionToBeBounded.call(this instanceof boundedFunction ? this : context, ...presetArgs, ...laterArgs);
    };

};


const bound = greet.myBind(user);
console.log(bound("Yo..!")); // Yo..! arya 



// A quick context about instanceOf operator and also about prototype accessing for funcitons and objects


// Constructor function that is used to construct and return objects, alternative of classes
function Animal(name){
    this.name = name
}


let dog = new Animal("chaow chaow");

console.log(dog, "object instance created from the Animal ");
console.log(dog instanceof Animal); // The created dog object is an instance of the Animal 

console.log(dog.__proto__);
//  dog.__proto__ = {
//     mowa: "jojo"
// }
// console.log(dog.__proto__);


function sleep(){
    return "I am sleeping"
}

console.log(sleep.prototype);

// ------------------------------------------------------------------