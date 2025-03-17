
// Sum operation using Currying in js

function currySum(first) {
    return function (second) {
        return function (third) {
            console.log(first + second + third)
        }
    }

}


currySum(4)(3)(2); // 10