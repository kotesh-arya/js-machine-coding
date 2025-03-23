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

