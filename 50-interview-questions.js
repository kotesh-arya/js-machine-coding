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


