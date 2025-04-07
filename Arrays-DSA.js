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


console.log(0 - 4);