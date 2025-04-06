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
