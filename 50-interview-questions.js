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

console.log(findLongestWord(
    "Watch Thapa Technical javascript awesomethapatechnical course on youtube"
));
console.log(findLongestWord(" "));

console.log(findLongestWord("Hello!! World123"));


// console.log(" ".trim().length, "empty string after trimmming");