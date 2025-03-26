//* ---------------------------------------------------------
//* Question 1 : Longest Word in a String
//* ---------------------------------------------------------

//? Q: Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.

//* Constraints:
//? The input string may contain alphabetic characters, digits, spaces, and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:
//? If the input string is empty or contains only whitespace, the function should return an false.
//? The function should ignore leading and trailing whitespace when determining the longest word.


function findLongestWord(sentence) {
    sentence = sentence.trim();
    // console.log("sentence ", sentence, "----");
    // console.log("sentence length", sentence.length);
    if (sentence.length === 0) {
        // console.log("from false block");
        // console.log("false");
        return false;
    }
    // console.log(sentence, "rest of the code executing after emptyness check");
    let wordArray = sentence.split(" ");
    // console.log(wordArray);
    let longestWordLength = 0;
    // A loop to count the length of each word and compare it with other word length and update the highest length count
    for (let i = 0; i < wordArray.length; i++) {
        // console.log(wordArray[i]);
        if (wordArray[i].length > longestWordLength) {
            longestWordLength = wordArray[i].length;
        }
    }
    // console.log(longestWordLength);
    let longestWord = wordArray.find(item => item.length === longestWordLength);
    // console.log(longestWord);
    // console.log(longestWord, "using for loop");
    return longestWord

    // let longestWordusingReduce = wordArray.reduce((acc, curr) => acc.length > curr.length ? acc : curr, "");

    // console.log(longestWordusingReduce, "using reduce");
}

// console.log(findLongestWord(
//     "Watch Thapa Technical javascript awesomethapatechnical course on youtube"
// ));
// console.log(findLongestWord(" "));

// console.log(findLongestWord("Hello!! World123"));


// console.log(" ".trim().length, "empty string after trimmming");

//*-------------------------------------------
//*  Question 2 : Hash Tag Generator
//*-------------------------------------------

//? You are required to implement a function generateHash that generates a hash tag from a given input string. The hash tag should be constructed as follows:

//? The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//? Otherwise, the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish this task.


// Input String  |	Expected Output
// "hello world" |	"#HelloWorld"
// " coding is fun " |	"#CodingIsFun"
// "this is a very long sentence that should be converted to a hashtag" | "#ThisIsAVeryLongSentenceThatShouldBeConvertedToAHashtag"

// "" (empty string) |	false
// " " (only whitespace) |	false
// "a".repeat(281) (string longer than 280) |	false
// "single" |	"#Single"


function generateHash(text) {
    // console.log(text);
    let trimmedText = text.trim();
    if (trimmedText.length === 0) {
        return false;
    }
    if (trimmedText.length > 280) {
        return false;
    }
    let splittedText = trimmedText.split(" ");
    // console.log(splittedText);
    let result = "";
    for (let i = 0; i < splittedText.length; i++) {
        let charSplitArr = splittedText[i].split("");
        // console.log( result += charSplitArr[0].toUpperCase() + charSplitArr.splice(1).join(""));
        result += (charSplitArr[0].toUpperCase() + charSplitArr.splice(1).join(""));
        // console.log(result, "hashed result inside loop");
    }
    return "#" + result;
}

console.log(generateHash("hello world"));

console.log(generateHash(" coding is fun "));

console.log(generateHash("this is a very long sentence that should be converted to a hashtag"));


console.log(generateHash(""));
console.log(generateHash(" "));
console.log(generateHash("a".repeat(281)));
console.log(generateHash("single"));

//*---------------------------------------------------------
//*  Question 3 : Count Occurrences of Character
//*---------------------------------------------------------

//! Task:
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

function countChar(string, char) {
    let splittedString = string.split("");
    // console.log(splittedString);
    let charOccurences = 0;

    for (let i = 0; i < splittedString.length; i++) {
        // console.log(splittedString[i]);
        if (splittedString[i] === char) {
            charOccurences++;
        }
    }
    return charOccurences;
}

console.log(countChar("insane", "e"));

// Test Cases
console.log(countChar("hello world", "o")); // Expected output: 2
console.log(countChar("banana", "a")); // Expected output: 3
console.log(countChar("JavaScript", "j")); // Expected output: 0 (if case-sensitive)
console.log(countChar("JavaScript", "J")); // Expected output: 1
console.log(countChar("developer", "z")); // Expected output: 0
console.log(countChar("count the spaces", " ")); // Expected output: 2
console.log(countChar("hello-world!", "-")); // Expected output: 1
console.log(countChar("hello-world!", "!")); // Expected output: 1
console.log(countChar("123123123", "1")); // Expected output: 3
console.log(countChar("", "a")); // Expected output: 0
console.log(countChar("Mississippi", "s")); // Expected output: 4



//*---------------------------------------------------------
//*  Question 4:
//*---------------------------------------------------------
//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

const checkTriangleType = (a, b, c) => {
    if (a === b && b === c) return "equilateral";
    if (a === b || b === c || a === c) return "isosceles";
    return "scalene";
};

console.log(checkTriangleType(3, 3, 5)); // Output: "equilateral"
console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles"
console.log(checkTriangleType(5, 8, 6)); // Output: "scalene"

//todo The function should adhere to the following rules:
//? If all three sides are of equal length, return "equilateral".
//? If only two sides are of equal length, return "isosceles".
//? If all three sides have different lengths, return "scalene"

//*---------------------------------------------------------
//*  Question 5:
//*---------------------------------------------------------

//? 15: Write a function to calculate the sum of squares of all elements in an array. For example, given the array [1, 2, 3], the function should return 14 because 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14.

function squareAndSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        sum += arr[i] * arr[i]
    }
    return sum;
}
console.log(squareAndSum([1, 2, 3]));


//*---------------------------------------------------------
//* Coding Challenge: Find the Minimum Value in an Array
//*---------------------------------------------------------
//? Q6: Write a function findMin that takes an array of numbers as input and returns the minimum value found in the array.

//* Constraints:
//? The input array may contain both positive and negative integers.
//? The input array may be empty.
//? The input array may contain duplicate values.

function findMin(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// // Example usage:
console.log(findMin([5, 10, 2, 8])); // Output: 2
console.log(findMin([5, -3, 0, 12, -7])); // Output: -7
console.log(findMin([]));

//*--------------------------------
//* Coding Challenge
//*--------------------------------
//? Q7: Write a function to check if a character is uppercase or lowercase.


const isUpperCase = (char) => {
    //   if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    //     return true;
    //   }
    //   return false;
    return char === char.toUpperCase();
};

console.log(isUpperCase("s"));
console.log(isUpperCase("S"));


console.log("S".toUpperCase());

console.log("----------------------------------------");
//*--------------------------------
//*  Q8: Write a function to convert a string to camelCase & snake_case.
//*--------------------------------

function toCamelCase(text) {
    let trimmedText = text.trim();

    let splittedTextArr = trimmedText.split(" ");
    let camelText = splittedTextArr[0].toLowerCase();
    for (let i = 0; i < splittedTextArr.length; i++) {
        if (i > 0) {
            let capitalizedFirstChar = splittedTextArr[i].charAt(0).toUpperCase();
            console.log("capitalized first char", capitalizedFirstChar);
            let LowercasedRestOfchars = splittedTextArr[i].slice(1).toLowerCase();
            // console.log("original chars", splittedTextArr[i]);
            console.log("after diverging", LowercasedRestOfchars);
            camelText += splittedTextArr[i].charAt(0).toUpperCase() + LowercasedRestOfchars
        }
    }
    return camelText;
}

function toSnakeCase(text) {
    let trimmedText = text.trim();

    let splittedCharArr = trimmedText.split("");
    console.log(splittedCharArr);
    let snakeCaseText = "";
    for (let i = 0; i < splittedCharArr.length; i++) {
        if (splittedCharArr[i].charCodeAt(0) >= 65 && splittedCharArr[i].charCodeAt(0) <= 90) {
            console.log(splittedCharArr[i]);
            snakeCaseText += "_" + splittedCharArr[i].toLowerCase();
        } else {
            snakeCaseText += splittedCharArr[i];
        }
    }
    return snakeCaseText;
}
// Example usage:
console.log(toCamelCase("hello world moWa")); // Output: helloWorld

console.log(toSnakeCase("helloWorld")); // Output: hello_world


//*--------------------------------
// Q9: Write a function to check if a given string starts with a specific substring.
//*--------------------------------

// Input:

//? str: A string (e.g., "Hello world").
//? subStr: A substring to check if it starts the given string (e.g., "Hello").
//? Output: true if the given string starts with the specified substring, otherwise false.

function checkSubstring(str, subStr) {
    if (str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase()) {
        return true;
    } else {
        return false
    }
}
console.log(checkSubstring("Hello world", "ello"));


//*--------------------------------
//Q10. Write a function to reverse a string without using any built-in methods or libraries. The function should take a string as input and return the reversed string.
//*--------------------------------


function reverseString(str) {
    let splittedStringArr = str.split("");
    let reverseStrArr = [];
    console.log(splittedStringArr);
    for (let i = splittedStringArr.length - 1; i >= 0; i--) {
        console.log(splittedStringArr[i]);
        reverseStrArr.push(splittedStringArr[i]);

    }
    return reverseStrArr.join("");
}

// Or 

// const reverseString = (str) => {
//     let r_str = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         r_str = r_str + str[i];
//     }
//     return r_str;
// };

console.log(reverseString("kotesh"));


//*--------------------------------
//* Q11. Write a function called calculateMean that takes an array of numbers as input and returns the mean (average) of those numbers. 
//*--------------------------------



//todo In math, the mean is the average of a set of numbers, or the numeric value that represents the center of a collection of numbers.

//? Constraints:
//? The input array may contain positive and negative integers.
//? The input array may be empty. If it is empty, the function should return 0.


function calculateMean(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / (arr.length)
}

// Edge case: Empty array (should return 0)
console.log(calculateMean([]),); // Expected output: 0

// Case 1: All positive numbers
console.log(calculateMean([2, 4, 6, 8, 10])); // Expected output: 6

// Case 2: All negative numbers
console.log(calculateMean([-3, -7, -1, -5])); // Expected output: -4

// Case 3: Mixed positive and negative numbers
console.log(calculateMean([-2, 3, -4, 5, -6, 7])); // Expected output: 0.5

// Case 4: Single element (positive)
console.log(calculateMean([9])); // Expected output: 9

// Case 5: Single element (negative)
console.log(calculateMean([-9])); // Expected output: -9

// Case 6: Including zero
console.log(calculateMean([0, 5, 10, 15])); // Expected output: 7.5

// Case 7: Large numbers
console.log(calculateMean([1000000, 2000000, 3000000])); // Expected output: 2000000

console.log(calculateMean([1, 2, 3, 4, 5])); // Output: 3
console.log(calculateMean([10, 20, 30])); // Output: 20
console.log(calculateMean([-1, 0, 1])); // Output: 0
console.log(calculateMean([])); // Output: 0


//*---------------------------
//* Q12. Write a JavaScript function findMedian(arr) that takes an array of numbers as input and returns the median value. If the array has an even number of elements, return the average of the two middle values.
//*---------------------------



//? For example, the median of 3, 3, 5, 9, 15 is 5. If there is an even number of observations, then there is no single middle value; the median is then usually defined to be the mean of the two middle values: so the median of 3, 5, 7, 9 is (5+7)/2 = 6.

//todo  Tips
//? Sort the array in ascending order.
//? If the array has an odd number of elements, the median is the middle element.
//?

function findMedian(arr) {
    // console.log(arr, "before sorting");
    arr.sort((a, b) => a - b);
    // console.log(arr, "after sorting");
    if (arr.length % 2 === 0) {
        // console.log("hi", arr.length / 2, (arr.length / 2) - 1);
        return (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2
    } else {
        // console.log("hello", arr.length / 2);
        return arr[Math.floor(arr.length / 2)];
    }
}
console.log(findMedian([15, 9, 5, 3, 3]));


console.log(findMedian([3, 5, 7, 9])); // Output: 6
console.log(findMedian([5, 3, 9, 1, 7])); // Output: 5
console.log(findMedian([2, 4, 6, 8])); // Output: 5
console.log(findMedian([1, 3, 5, 7, 9, 11])); // Output: 6

//*---------------------------
//* Q13. Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).
//*---------------------------


// function findMode(arr) {
//     console.log("yo...!");
//     let occurenceMap = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         if (occurenceMap.has(arr[i])) {
//             occurenceMap.set(arr[i], occurenceMap.get(arr[i]) + 1)
//         }
//         else {
//             occurenceMap.set(arr[i], 1);
//         }
//     }
//     // console.log("populated map", occurenceMap);
//     // console.log("map values", occurenceMap.entries());
//     let mapEntiresArr = Array.from(occurenceMap.entries());
//     // console.log(mapEntiresArr);
//     let maxCountArr = mapEntiresArr[0];
//     // console.log(maxCountArr[1]);
//     for (let i = 1; i < mapEntiresArr.length; i++) {
//         // console.log(mapEntiresArr[i][1], "*******", maxCountArr[1]);
//         // console.log(mapEntiresArr[i]);
//         if (mapEntiresArr[i][1] > maxCountArr[1]) {
//             maxCountArr = mapEntiresArr[i]
//         }
//     }
//     return maxCountArr[0];
// }




function findMode(arr) {
    // console.log("yo...!");
    let occurenceObj = {};
    let maxOccurrence = 0;
    let mode = 0;
    for (elem of arr) {
        // console.log(elem, "each element");
        if (elem in occurenceObj) {
            occurenceObj[elem] += 1;
            if (occurenceObj[elem] > maxOccurrence) {
                maxOccurrence = occurenceObj[elem];
                mode = elem;
            }
        } else {
            occurenceObj[elem] = 1;
        }
        // console.log("occurence object indise loop", occurenceObj);
    }
    // console.log("occurence object", occurenceObj);
    // console.log("final mode", mode);
    return mode;
}
// Example usage:
console.log(findMode([1, 4, 4, 4, 4, 4, 9, 9, 9, 9, 9, 9, 9, 2, 2, 3, 1, 4, 2])); // Output: 9 ✅

//* Constraints:
//? The input array will always contain at least one element.
//? The mode will always be unique (i.e., there won't be multiple numbers with the same highest frequency).


//*---------------------------
//* Coding Challenge

//* Q14.Write a function to calculate the factorial of a number.(using Recursion)

//* Recursion:
//? Recursion is a programming technique where a function calls itself in order to solve a problem. In essence, it's a function that calls itself with smaller or simpler input until it reaches a base case.

//* Base Case:
//? The base case is the condition in a recursive function that stops the recursion. It's the point at which the function stops calling itself and returns a value without further recursion. Without a base case, the recursive function would continue calling itself indefinitely, leading to what's known as infinite recursion.


//*---------------------------

//* Recursive Case:
//?
function getFactorial(num) {
    if (num < 1) {
        return 1
    } else {
        return num * getFactorial(num - 1);
    }
}
console.log(getFactorial(4));


//*---------------------------
//* Q15.//* Write a function to find the nth Fibonacci number.

//? The Fibonacci series is a sequence of numbers in which each number (Fibonacci number) is the sum of the two preceding ones. It starts with 0 and 1, and the subsequent numbers are calculated by adding the last two numbers. So, the Fibonacci series looks like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

//todo Fibonacci number is calculated using the following formula:
//todo syntax:  F(n) = F(n-1) + F(n-2), Where, F(1) = F(2) = 1.//*---------------------------




function getFibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return getFibonacci(num - 1) + getFibonacci(num - 2)
    }
}
console.log((getFibonacci(4))); // 3


//*--------------------------------------
//* Q16.Repeat a String
//*--------------------------------------

//* Write a function called repeatString that takes two parameters:

//? str: A string that needs to be repeated.
//?  num: An integer representing the number of times the string should be repeated.
//? The function should repeat the input string str the specified number of times num and return the resulting string.
function repeatString(text, repeatCount) {
    let finalString = "";
    for (let i = 1; i <= repeatCount; i++) {
        finalString += text;
    }
    return finalString;
}
console.log(repeatString("abos", 1));

console.log(repeatString("abc", 3));  // "abcabcabc"
console.log(repeatString("hello", 2)); // "hellohello"
console.log(repeatString("x", 5));     // "xxxxx"
console.log(repeatString("test", 1));  // "test"
console.log(repeatString("wow", 0));   // "" (empty string)


// Edge cases
console.log("________________________________");
console.log(repeatString("", 5));   // "" (empty string, even if repeated) ✅
console.log(repeatString("a", 0));  // "" (should return an empty string)✅ 
console.log(repeatString("abc", -1)); // "" (negative numbers should return an empty string)✅
console.log(repeatString("123", 10)); // "123123123123123123123123123123" (handling large repetitions)✅
console.log("***", repeatString(" ", 4), "****");  // "    " (four spaces)✅


//*--------------------------------------
//* Q17.Truncate a String
//*--------------------------------------

//* Write a function called truncateString that takes two parameters:

//? str: A string that needs to be truncated.
//? maxLength: An integer representing the maximum length of the string allowed.
//? 


function truncateString(text, truncCount) {
    let splittedTextArr = text.split("");
    // console.log(splittedTextArr, truncCount);
    let truncatedText = "";
    for (let i = 0; i < truncCount; i++) {
        // console.log(splittedTextArr[i]);
        truncatedText += splittedTextArr[i]
    }
    if (truncCount >= splittedTextArr.length) {
        return truncatedText;
    } else {
        return truncatedText + "..."
    }
}


console.log(truncateString("Hello World", 5));   // "Hello..." ✅
console.log(truncateString("JavaScript", 4));    // "Java..."✅
console.log(truncateString("OpenAI", 6));        // "OpenAI" (No truncation needed)✅
console.log(truncateString("Truncate", 8));      // "Truncate" (Exact length, no change)✅
console.log(truncateString("Coding", 3));        // "Cod..."✅


//*-----------------------------------------------
//* Q18.Simple Password Validator
//*-----------------------------------------------

//* Write a function called simplePasswordValidator that takes a single parameter:

//? password: A string representing the password to be validated.
//? The function should validate the password based on the following criteria:

//? The password must contain at least one lowercase letter, one uppercase letter, and one digit.
//? The length of the password must be at least 8 characters.
//? The function should return true if the password meets all the criteria, otherwise, it should return false.

//* Input:
//? password: A non-empty string representing the password to be validated.

//* Output:
//? true if the password meets all the criteria.
//? false otherwise.

//* Constraints:
//? The input string password will contain only alphanumeric characters and punctuation marks.


const simplePasswordValidator = (password) => {
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber = false;
    for (let char of password) {
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            hasUpperCase = true;
        } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
            hasLowerCase = true;
        } else if (!isNaN(Number(char))) {
            hasNumber = true;
        }
    }

    if (!hasLowerCase || !hasUpperCase || !hasNumber || password.length < 8) {
        return false;
    }

    return true;
};

// console.log(!isNaN(5));

console.log(simplePasswordValidator("afkdsfadsf")); // Output: false
console.log(simplePasswordValidator("afkdsfadsf1")); // Output: false
console.log(simplePasswordValidator("afkdsfadsf1A")); // Output: true
console.log(simplePasswordValidator("afkdsfadsf1Aa")); // Output: true



//*-----------------------------------------------
//* Q19.Recursive Number Range Generator
//*-----------------------------------------------

//? Write a recursive function called numberRangeRecursive that generates an array containing consecutive numbers from a to b (inclusive).

//* Input:
//? a: An integer representing the starting number of the range.
//? b: An integer representing the ending number of the range.
//? arr: An optional parameter representing the array to store the numbers in the range. It defaults to an empty array.

//* Output:
//? An array containing consecutive numbers from a to b (inclusive).

//* Constraints:
//? a and b will be integers.
//? a will be less than or equal to b.


function numberRangeRecursive(a, b, rangeArr = []) {
    if (a <= b) {
        rangeArr.push(a);
        return numberRangeRecursive(a + 1, b, rangeArr) // passing the rangeArr to for a persistent array throughout the recursive function invocation.
    }
    return rangeArr;
}

console.log(numberRangeRecursive(0, 5)); // Output: [0, 1, 2, 3, 4, 5]
console.log(numberRangeRecursive(3, 7)); // Output: [3, 4, 5, 6, 7]
console.log(numberRangeRecursive(-2, 2)); // Output: [-2, -1, 0, 1, 2]