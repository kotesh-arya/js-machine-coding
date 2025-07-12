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
// // function createCounter() {
// //     let count = 0;
// //     return {
// //         increment() { count++; return this; },
// //         get() { return count; }
// //     };
// // }
// // let counter1 = createCounter();
// // console.log(counter1);
// // console.log(counter1.get(), "value if the property in the created object instance BEFORE incermenting");
// // console.log(counter1.increment());
// // console.log(counter1.get(), "value if the property in the created object instance AFTER incermenting");

// // ---------------------------------------------------------------------
