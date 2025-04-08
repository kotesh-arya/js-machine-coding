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

console.log(reverse(arr));

// Count Frequency of Elements

const str = "banana";
let freq = {}

for (let i = 0; i < str.length; i++) {
    freq[str[i]] = (freq[str[i]] || 0) + 1;
}
console.log(freq);

// Check Palindrome (same forward & backward)

let input = "madam"
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--
    }
    return true;
}

console.log(isPalindrome("madam"));



// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    console.log(s)
    let lowercaseString = s.toLowerCase();
    let splittedLowercaseString = lowercaseString.split("");
    let ASCIIFilteredStringArr = splittedLowercaseString.filter((char) => char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 || char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
    console.log("final string array", ASCIIFilteredStringArr);
    let left = 0;
    let right = ASCIIFilteredStringArr.length - 1
    while (left < right) {
        if (ASCIIFilteredStringArr[left] !== ASCIIFilteredStringArr[right]) {
            return false;
        }
        left++;
        right--
    }
    return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("0P"));



// Q3: Find distinct elements in an array [sorted]
let mixedArr = [1, 2, 2, 3, 4, 4, 4, 5, 5]
// output: [1,2,3,4,5];

function getDistinctElements(arr) {
    let distinctEl = arr[0];
    let distinctArr = [];
    distinctArr.push(arr[0])
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === distinctEl) {
            continue;
        } else {
            distinctArr.push(arr[i]);
            distinctEl = arr[i];
        }
    }
    return distinctArr
}
console.log(getDistinctElements(mixedArr));   //[1,2,3,4,5]
console.log(getDistinctElements([2, 2, 2, 2]));  //[2]


// Q4: Generate all sub arrays of an array

// input : [1,2,3]
// output: [1], [1,2], [2], [2,3], [1,2,3], [3]

function getSubArrays(arr) {
    let subArrayCount = 0;
    for (let i = 1; i <= arr.length; i++) {
        let subArr = [];
        for (let j = i - 1; j < arr.length; j++) {
            subArr.push(arr[j])
            console.log(subArr, "<----");
            subArrayCount++;
        }
    }
    return subArrayCount;
}
console.log(getSubArrays([1, 2, 3]));
