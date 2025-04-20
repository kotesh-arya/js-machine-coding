let nickname = "charan";

console.log(nickname);
console.log`nickname`; // [ 'nickname' ]
let age = 30;
let gender = "male";
// Calling a function using ``s without ()

function sample(name, age, gender, ponder) {
    console.log(name, age, gender, ponder);
}


sample`My name is ${nickname} and I am ${age} years old and I am a ${gender}` // [ 'My name is ', ' and I am ', ' years old and I am a ', '' ] charan 30 male

// Accessing characters

let state = "Telangana";

console.log(state[3]); // a
console.log(state.charAt(3)); // a

// Strings are IMMUTABLE

state[3] = "u";
console.log(state); // Telangana (untouched)
// try with some method

let modifiedResultString = state.replace("a", "u"); // case sensitive (s and S are treated different)
console.log(state); // Telangana (untouched)
console.log(modifiedResultString); // this replace method returns a whole different string

// In the same way all the methods related to string operations cannot modify existing string, but retunrs new strings
let concatenatedString = state.concat(" and seeded Nizam");

console.log(concatenatedString); // Telangana and seeded Nizam

let spaceEndedString = "  Hey   man!!  ";
let trimedString = spaceEndedString.trim();
console.log(spaceEndedString); //   Hey   man!!  [unmodified original string]
console.log(trimedString); //Hey   man!!

// Searching and finding inndex of a character in a string

console.log(state.indexOf("g")); // 5
console.log(concatenatedString.indexOf("seeded")); // 14

// Boolean functions (case sensitive - s is different from S)
console.log(state.startsWith("T")); //true
console.log(state.startsWith("t")); //false

console.log(state.endsWith("a")); //true
console.log(state.endsWith("A")); //false

// Extract substrings

console.log(state.substring(3)); // angana [from 3rd indexed character to the end, and there is no second argument provided]

// To string conversion
let person = { name: "kiran" };

console.log(String(person)); // [object Object]
console.log(JSON.stringify(person)); // {"name":"kiran"}

// ASCII characters and the single source of truth for this case sensitivity

console.log("a" === "A"); // false

// Accesss ASCII value of a character
console.log("a".charCodeAt(0)); //97
console.log(String.fromCharCode(97)); // a
let stateClone = "Telangana"
console.log(state.localeCompare(concatenatedString)); // -1 means unequal
console.log(state.localeCompare(stateClone)); // 0 means equal



// Questions:
// Q1: Truncate String: For an input string, if the input string length is greater than the value of maxLength then the characters after that maxLength value index of the input string should be replaced with "..."



function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        // console.log(maxLength, "maxlength");
        let truncateChar = str.charAt(maxLength);
        // console.log(truncateChar, "<-----------");
        let truncateCharIndex = str.indexOf(truncateChar);
        // console.log(truncateCharIndex);
        let splittedText = str.slice(0, truncateCharIndex);
        // console.log(splittedText);
        return splittedText + "..."
    } else {
        return str
    }
}
console.log(truncateString("Ignorance is a Bliss", 9));

// Q2: Check Palindrome Number - An integer is a palindrome if it is same in either case of reading forward and backward.

function checkPalindrome(num) {
    console.log(typeof num.toString());
    return num === +num.toString().split("").reverse().join("");
}
console.log(checkPalindrome(121));

// console.log("kotesh".split("").reverse().join(""));

// Q3: Hamming distance 
// Given strings x and y, return the hamming distance between them 

// Input x = "hello" and y="hwllr"
// output = 2

// Explation
//   (hello)
//   (hwllr)
//     ⬆  ⬆


function hammingDistance(x, y) {
    if (x.length === y.length) {
        let distance = 0;

        for (let i = 0; i < x.length; i++) {
            if (x[i] !== y[i]) {
                distance++;
            }
        }
        return distance
    } else {
        throw new Error("Two strings are not of equal length");
    }
}
console.log(hammingDistance("hello", "hwllr"), "hamming distance");


let digit = 2;

console.log(digit.toString(2));

// Reverse an array

let arr = [1, 2, 3, 4, 5];

function reverseArr(arr) {
    let left = 0;
    let right = arr.length - 1;
    let temp;

    while (left < right) {
        temp = arr[left];
        arr[left] = arr[right]
        arr[right] = temp;

        left++;
        right--
    }
    return arr
}
console.log(reverseArr(arr)); // [5,4,3,2,1]
console.log(reverseArr([5, 3, 2, 4, 5, 7])); // [ 7, 5, 4, 2, 3, 5 ]
console.log(reverseArr([5, 6, 4, 3, 5, 6])); // [ 6, 5, 3, 4, 6, 5 ]
console.log(reverseArr([9, 8, 7, 6, 5])); // [ 5, 6, 7, 8, 9 ]
console.log(reverseArr([4, 3, 2, 1, 5])); // [ 5, 1, 2, 3, 4 ]
console.log(reverseArr([3, 4, 2, 6, 7])); // [ 7, 6, 2, 4, 3 ]



// Rotate an array(default right) by k digits

let arr2 = [1, 2, 3, 4, 5];

function rotateArr(arr, k) {
    if (k > arr.length) {
        return "k value is greater than array length"
    }
    for (let i = 0; i < k; i++) {
        let temp1 = arr[arr.length - 1];
        let temp2;
        for (let i = 0; i < arr.length; i++) {
            temp2 = arr[i];
            arr[i] = temp1;
            temp1 = temp2;
        }
    }
    return arr;
}
console.log(rotateArr(arr2, 1)); // [5,1,2,3,4]
console.log(rotateArr(arr2, 2)); // [3,4,5,1,2] // rotating the roated array only
console.log(rotateArr(arr2, 3)); // [5,1,2,3,4] // rotating the roated array 
console.log(rotateArr(arr2, 4)); // [1,2,3,4,5] // rotating the roated array 



// Rotate an array to left by k digits

let arr3 = [2, 4, 6, 8, 10];


function leftRotateArr(arr, k) {
    for (let i = 0; i < k; i++) {
        let temp1 = arr[0];
        let temp2;
        for (let i = arr.length - 1; i >= 0; i--) {
            temp2 = arr[i];
            arr[i] = temp1;
            temp1 = temp2;
        }
    }
    return arr;
}
console.log(leftRotateArr(arr2, 3)); // [4,5,1,2,3] // rotating arr2 which was already got maniputated by above function

console.log(leftRotateArr(arr3, 2)); // [6,8,10,2,4]
