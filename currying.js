
// Sum operation using Currying in js

// function currySum(first) {
//     return function (second) {
//         return function (third) {
//             console.log(first + second + third)
//         }
//     }
// }


// currySum(4)(3)(2); // 10


// Infinite currying

function curriedSum(a) {
    return function (b) {

        if (b !== undefined) {
            return curriedSum(a + b);   
        } else {
            return a
        }
    };
}


console.log(curriedSum(2)(3)()); // 2 + 3 = 5

console.log(curriedSum(5)(4)(3)(2)(1)()); // 5 + 4 + 3 + 2 + 1 = 15
