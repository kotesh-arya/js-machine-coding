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