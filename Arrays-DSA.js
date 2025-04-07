// Array Traversal
let arr = [1, 2, 3, 4, 5, 6, 7]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let j = arr.length - 1; j >= 0; j--) {
    console.log(arr[j]);
}

for (let num of arr) {
    console.log(num);
}



// Reverse a string or an array

function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--
        }
    }
    return arr;
}

console.log(reverse(arr))