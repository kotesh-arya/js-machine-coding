// Patterns

// * * * *
// * * * *
// * * * *
// * * * *

function pattern1(n) {
  let line = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      line += "*";
    }
    // at the end of internal loop for each row, print the loaded stars and then reset the line
    console.log(line);
    line = "";
  }
}
// pattern1(4);
// ----------------------------------------------------

// *
// * *
// * * *
// * * * *

function pattern2(n) {
  let line = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      line += "*";
    }
    // at the end of internal loop for each row, print the loaded stars and then reset the line
    console.log(line);
    line = "";
  }
}
// pattern2(4);
// ----------------------------------------------------

// 1
// 1 2
// 1 2 3
// 1 2 3 4

function pattern3(n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    // at the end of internal loop for each row, print the loaded stars and then reset the line
    console.log(line);
    line = "";
  }
}
// pattern3(4);
// ----------------------------------------------------

// 1
// 2 2
// 3 3 3
// 4 4 4 4

function pattern4(n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += i;
    }
    // at the end of internal loop for each row, print the loaded stars and then reset the line
    console.log(line);
    line = "";
  }
}
// pattern4(4);
// ----------------------------------------------------

// * * * * *
// * * * *
// * * *
// * *
// *

function pattern5(n) {
  let line = "";
  for (let i = n; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    // at the end of internal loop for each row, print the loaded stars and then reset the line
    console.log(line);
    line = "";
  }
}
// pattern5(5);
// ----------------------------------------------------

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function pattern6(n) {
  let line = "";
  for (let i = n; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    // at the end of internal loop for each row, print the loaded stars and then reset the line
    console.log(line);
    line = "";
  }
}
// pattern6(5);
// ----------------------------------------------------

// _  _  _  _  *  _  _  _  _
// _  _  _  *  *  *  _  _  _
// _  _  *  *  *  *  *  _  _
// _  *  *  *  *  *  *  *  _
// *  *  *  *  *  *  *  *  *

function pattern7(n) {
  let line = "";
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j > 0; j--) {
      line += "   ";
    }

    for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
      line += " * ";
    }

    for (let j = i; j > 0; j--) {
      line += "   ";
    }

    console.log(line);
    line = "";
  }
}
// pattern7(5);
// ----------------------------------------------------
console.log("----------Pattern - 8 below ⤵----");

// *  *  *  *  *  *  *  *  *
// _  *  *  *  *  *  *  *  _
// _  _  *  *  *  *  *  _  _
// _  _  _  *  *  *  _  _  _
// _  _  _  _  *  _  _  _  _

function pattern8(n) {
  let line = "";
  for (let i = 0; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
      line += "   ";
    }

    for (let k = 2 * n - (2 * i + 1); k > 0; k--) {
      line += " * ";
    }

    for (let j = 0; j < i; j++) {
      line += "   ";
    }

    console.log(line);
    line = "";
  }
}
// pattern8(5);
// ----------------------------------------------------

// _  _  _  _  *  _  _  _  _
// _  _  _  *  *  *  _  _  _
// _  _  *  *  *  *  *  _  _
// _  *  *  *  *  *  *  *  _
// *  *  *  *  *  *  *  *  *
// *  *  *  *  *  *  *  *  *
// _  *  *  *  *  *  *  *  _
// _  _  *  *  *  *  *  _  _
// _  _  _  *  *  *  _  _  _
// _  _  _  _  *  _  _  _  _

function pattern9(n) {
  let line = "";

  // Normal triangle
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      line += "   ";
    }

    for (let k = 0; k < 2 * n - (2 * i + 1); k++) {
      line += " * ";
    }

    for (let j = 0; j < i; j++) {
      line += "   ";
    }

    console.log(line);
    line = "";
  }

  // Inverted triangle
  for (let i = 0; i <= n - 1; i++) {
    for (let j = 0; j < i; j++) {
      line += "   ";
    }

    for (let k = 2 * n - (2 * i + 1); k > 0; k--) {
      line += " * ";
    }

    for (let j = 0; j < i; j++) {
      line += "   ";
    }

    console.log(line);
    line = "";
  }
}
// pattern9(5);
// ----------------------------------------------------

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

// NOTE: Observe the symmetry point in the pattern and then based on the condition, control the upper-limit of the inner loop, gracefully✅

function pattern10(n) {
  let line = "";

  for (let i = 1; i <= 2 * n - 1; i++) {
    let starCount = i;
    if (i > n) {
      starCount = 2 * n - i;
    }

    for (let j = 1; j <= starCount; j++) {
      line += "*";
    }

    console.log(line);
    line = "";
  }
}
// pattern10(5);

// ----------------------------------------------------

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

// Pointer1 :  Leveraged the boolean to number conversion of true and false to print 1's and 0's by switching
function pattern11(n) {
  let line = "";

  // Pointer2 :  Initialized the binaryToggle digit as 1 by assigning it to true
  let binaryToggle = true;

  for (let i = 1; i <= n; i++) {
    // Pointer3 : If the row is even start with 0-> Numeric conversion of false else start with 1 numeric conversion of true
    if (i % 2 === 0) {
      binaryToggle = false;
    } else {
      binaryToggle = true;
    }

    // Pointer4 : Assign value and then toggle the binaryToggle value 1-> 0 and 0 -> 1
    for (let j = 1; j <= i; j++) {
      line += Number(binaryToggle);

      binaryToggle = Number(!binaryToggle);
    }

    console.log(line);
    line = "";
  }
}
// pattern11(5);

// ----------------------------------------------------

// 1             1
// 1 2         2 1
// 1 2 3     3 2 1
// 1 2 3 4 4 3 2 1

function pattern12(n) {
  let line = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += j;
    }

    for (let k = 1; k <= 2 * n - 2 * i; k++) {
      line += " ";
    }
    for (let l = i; l > 0; l--) {
      line += l;
    }

    console.log(line);
    line = "";
  }
}
// pattern12(4);

// ----------------------------------------------------

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

function pattern13(n) {
  let line = "";
  let count = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      line += count + " ";
      count++;
    }

    console.log(line);
    line = "";
  }
}
// pattern13(5);

// ----------------------------------------------------

// A
// A B
// A B C
// A B C D
// A B C D E

function pattern14(n) {
  let line = "";
  let charCodeInitial = 65;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      line += String.fromCharCode(j + charCodeInitial) + " ";
    }

    console.log(line);
    line = "";
  }
}
// pattern14(5);
// console.log("A".charCodeAt(0)); // 65
// console.log(String.fromCharCode(65)); // A

// ----------------------------------------------------

// A B C D E
// A B C D
// A B C
// A B
// A

function pattern15(n) {
  let line = "";
  let charCodeInitial = 65;
  for (let i = n; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      line += String.fromCharCode(j + charCodeInitial) + " ";
    }

    console.log(line);
    line = "";
  }
}
// pattern15(5);

// ----------------------------------------------------

// A
// B B
// C C C
// D D D D
// E E E E E

function pattern16(n) {
  let line = "";
  let charCodeInitial = 65;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      line += String.fromCharCode(i + charCodeInitial) + " ";
    }

    console.log(line);
    line = "";
  }
}
// pattern16(5);

// ----------------------------------------------

//    A
//   ABA
//  ABCBA
// ABCDCBA

function pattern17(n) {
  let line = "";
  let space = " ";
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      line += space;
    }

    let charValue = 64;
    for (let j = 0; j < 2 * i + 1; j++) {
      if (j > i) {
        charValue -= 1;
        line += String.fromCharCode(charValue);
      } else {
        charValue += 1;
        line += String.fromCharCode(charValue);
      }
    }

    for (let j = 1; j < n - i; j++) {
      line += space;
    }
    console.log(line);
    line = "";
  }
}

// pattern17(4);

// ----------------------------------------------------

// E
// D E
// C D E
// B C D E
// A B C D E

function pattern18(n) {
  let line = "";
  for (let i = 0; i < n; i++) {
    let charValue = 64;

    for (let j = i; j >= 0; j--) {
      line += String.fromCharCode(n - j + charValue);
    }
    console.log(line);
    line = "";
  }
}

// pattern18(5);
// ------------------------------------------------

// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********

function pattern19(n) {
  let line = "";
  for (let i = 0; i < n; i++) {
    // stars
    for (let j = 0; j < n - i; j++) {
      line += "*";
    }
    // spaces
    for (let k = 0; k < 2 * i; k++) {
      line += " ";
    }
    // stars
    for (let l = 0; l < n - i; l++) {
      line += "*";
    }
    console.log(line);
    line = "";
  }
  for (let i = n - 1; i >= 0; i--) {
    // stars
    for (let j = 0; j < n - i; j++) {
      line += "*";
    }
    // spaces
    for (let k = 0; k < 2 * i; k++) {
      line += " ";
    }
    // stars
    for (let l = 0; l < n - i; l++) {
      line += "*";
    }
    console.log(line);
    line = "";
  }
}
// pattern19(5);

// --------------------------------------------

// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

function pattern20(n) {
  let line = "";

  for (let i = 1; i < 2 * n; i++) {
    // stars

    let starCount = i;
    let spaceCount = 2 * (n - i);
    if (i > n) {
      starCount = 2 * n - i;
      spaceCount = i - (2 * n - i);
    }

    for (let j = 1; j <= starCount; j++) {
      line += "*";
    }

    // spaces
    for (let k = 0; k < spaceCount; k++) {
      line += " ";
    }
    // stars
    for (let l = 1; l <= starCount; l++) {
      line += "*";
    }
    console.log(line);
    line = "";
  }
}
// pattern20(5);

// --------------------------------------------
// Square pattern with Even input
function pattern21(n) {
  let line = "";

  for (let i = 1; i <= n; i++) {
    let starCount = i === 1 || i === n ? n / 2 : n / n;
    let spaceCount = i === 1 || i === n ? 0 : n - 2;

    // console.log("space count", spaceCount);

    // stars
    for (let j = 0; j < starCount; j++) {
      line += "*";
    }

    // spaces

    for (let k = 0; k < spaceCount; k++) {
      line += " ";
    }

    // stars

    for (let l = 0; l < starCount; l++) {
      line += "*";
    }
    console.log(line);
    line = "";
  }
}

pattern21(6);

// Basic Maths
// Extraction of digits and count them

let num = 7789;
let count = 0;

while (num > 0) {
  console.log(num % 10); // 9 -> 8 -> 7 -> 7
  num = num / 10;
  num = Math.floor(num);
  count++;
}
console.log(count); // 4


// Reverse a number

// let num2 = 10400;
let num2 = 1234;
// op: 4321
let revNum = 0;
let result = 0;
while (num2 > 0) {
  console.log(num2 % 10); // 9 -> 8 -> 7 -> 7
  revNum = revNum * 10 + num2 % 10
  num2 = num2 / 10;
  console.log(num2);
  num2 = Math.floor(num2);
  count++;
}
console.log(revNum, "result");



// Check Palindrome
function checkPalindrome(num) {
  let inputNum = num;
  let revNum = 0;
  // let result = 0;
  while (num > 0) {
    console.log(num % 10); // 9 -> 8 -> 7 -> 7
    revNum = revNum * 10 + num % 10
    num = num / 10;
    console.log(num);
    num = Math.floor(num);
    count++;
  }
  console.log(revNum, "reversed num");
  console.log(inputNum, "main num");

  if (inputNum === revNum) {
    console.log("A palindrome")
  }
  else {
    console.log(" Not A palindrome")
  }

}

checkPalindrome(1234)
checkPalindrome(121)


// First three largest elements in an array

let arr5 = [10, 4, 3, 50, 23, 90];

function firstThreeLargest(arr) {
  let first = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;
  let third = Number.MIN_SAFE_INTEGER;

  console.log(first, second, third)
  console.log(Number.MIN_SAFE_INTEGER);
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      third = second;
      second = arr[i]
    } else if (arr[i] > third) {
      third = arr[i];
    }
  }
  return [first, second, third]
}
console.log(firstThreeLargest(arr5));

// Key points / hints:

// Consider using a least possible integer as the initial value for all the three variables
console.log(Number.MIN_SAFE_INTEGER, "min integer"); // -9007199254740991

console.log(Number.MAX_SAFE_INTEGER, "max integer"); // 9007199254740991


// Find the Leaders in the array:
// A leader is an integer element which has has elements lessthan it's value on the right of it.
let integers = [16, 17, 4, 3, 5, 3];
let leadersArr = []
first: for (let i = 0; i < integers.length; i++) {
  console.log("for", integers[i]);

  for (let j = i + 1; j < integers.length; j++) {
    console.log(" ", integers[j]);
    if (integers[i] < integers[j]) {
      continue first;
    }
  }
  leadersArr.push(integers[i])


}
console.log(leadersArr, "leaders arr");


console.log("-----------------------------------");
// check if array is sorted

function checkArrraySort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // console.log(arr[i], arr[i + 1]);
    if (arr[i] > arr[i + 1]) {
      return "false";
    }
  }
  return "true";
}
console.log(checkArrraySort([5, 4, 3, 2, 1])); // false
console.log(checkArrraySort([1, 2, 3, 4, 5])); // true

console.log("-----------------------------------");


// Remove duplicate elements from the array:

// v1 - return a seperate array of distinct elements
let arr = [1, 2, 2, 3, 4, 4, 4, 5, 6]
let filteredArr = []
let currEl = arr[0];
filteredArr.push(arr[0]);

for (let i = 1; i < arr.length; i++) {
  if (currEl === arr[i]) {
    continue;
  } else {
    filteredArr.push(arr[i]);
    currEl = arr[i]
  }
}

console.log("filtered arr", filteredArr);

// v2 Arrange the distinct elements first and rest of the elements later without using a new array



let arr2 = [1, 2, 2, 2, 2, 3, 4, 4, 4, 5, 5];
let comparingElement = arr2[0];
console.log("Initial comparing element:", comparingElement);

let i = 1;
while (i < arr2.length) {
  if (comparingElement === arr2[i]) {
    let pickedElement = arr2[i];

    // Shift elements to left
    for (let j = i; j < arr2.length - 1; j++) {
      arr2[j] = arr2[j + 1];
    }
    arr2[arr2.length - 1] = pickedElement;
    // ⚡ Don't increment i, because a new element came at i after shifting and that also has to be checked for repetition
  } else {
    comparingElement = arr2[i];
    i++; // ✅ Now move to next index
  }
}

console.log("filtered arr2", arr2);

// Move zeroes to an end while maintaining the relative order of non-zero elements
// IP: [1, 2, 0, 4, 3, 0, 5, 0]
// OP: [1, 2, 4, 3, 5, 0, 0, 0]


let arr3 = [1, 2, 0, 4, 3, 0, 5, 0];


function moveZeroesToEnd(arr) {
  let i = 0;
  let movedZeroesCount = 0;
  while (i < arr.length - movedZeroesCount) {
    // console.log("ARRAY LENGTH", arr.length);
    console.log(i, "i value");
    // console.log(arr[i], "<----------------------");
    // console.log("arr", arr);
    if (arr[i] === 0) {
      let temp = arr[i];
      for (let j = i; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr[arr.length - 1] = temp;
      movedZeroesCount++;
    } else {
      i++;
    }
  }
  return arr;
}

console.log(moveZeroesToEnd(arr3)); // [1,2,4,3,5,0,0,0] 


console.log(moveZeroesToEnd([0, 0, 1])); // [1,0,0]  


// Mimimum operations with increment by "k" to make all the elements of the array as equal

function minIncOperations(arr, k) {
  // find highest element of the array

  let highestEl = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highestEl) {
      highestEl = arr[i]
    }
  }

  let operationsCount = 0;

  for (let j = 0; j < arr.length; j++) {

    if (arr[j] === highestEl) {
      continue
    } else {
      let difference = highestEl - arr[j];
      let differenceDivisor = Math.ceil(difference / k);
      operationsCount += differenceDivisor;
    }


  }

  return operationsCount;

}

console.log(minIncOperations([4, 7, 19, 16], 3)); // 10
console.log(minIncOperations([4, 4, 4, 4], 3)); // 0


// Minimum cost to make array size 1 by removing larger of pairs

// Given an array of n integers. We need to reduce size of array to one. We are allowed to select a pair of integers and remove the larger one of these two. This decreases the array size by 1. Cost of this operation is equal to value of smallest one. Find out minimum sum of costs of operations needed to convert the array into a single element.

// Examples:

// Input: arr[]= [4 ,3 ,2 ]
// Output: 4
// Explanation: Choose (4, 2) so 4 is removed, new array = {2, 3}. Now choose (2, 3) so 3 is removed.   So total cost = 2 + 2 = 4.

// Input: arr[]=[ 3, 4 ]
// Output: 3
// Explanation: choose (3, 4) so cost is 3.


// My approach [unfinished]
// function minCostForArrayReduction(arr) {
//   while (arr.length > 1) {
//     console.log("ji");
//     let firstLargest = 0;
//     for (let i = 0; i < arr.length; i++) {
//       console.log('arr=>', arr);
//       if (arr[i] > firstLargest) {
//         firstLargest = arr[i];
//       }
//     }
//     let leastDiffWithFirstLargest = firstLargest;
//     let secondLargest;
//     for (let j = 0; j < arr.length; j++) {
//       if (firstLargest - arr[j] < leastDiffWithFirstLargest && firstLargest - arr[j] !== 0) {
//         leastDiffWithFirstLargest = firstLargest - arr[j];
//         secondLargest = arr[j];
//       }
//     }

//     console.log("first largest---", firstLargest);
//     console.log("second largest---", secondLargest);



//     arr.length--;
//   }
// }
// minCostForArrayReduction([4, 3, 2])


// Sorted approach
function minCostForArrayReduction(arr) {
  // Minimum cost is (size - 1 : cause those many times we have to operate which leads the array left with one element) multiplied with minimum element.
  const n = arr.length;
  return (n - 1) * Math.min(...arr);
}

console.log(minCostForArrayReduction([4, 3, 2])); // 2 + 2 = 4
console.log(minCostForArrayReduction([4, 3])); // 3


// ----------------------------Arrary basic understanding problems end GFG-----------------

// ------------------------- Resume Basic maths-------------------

// Check if a number is an Armstrong number or not

// Armstrong number: For an n-digit number, the summation of individual digits raised to "n", is equal to it's value

// Ex: 371(3 digits)  -> 3**3 + 7**3 + 1**3  = 371

function checkArmstrongNum(num) {
  let initialNum = num;
  let digitRaisedToPowerSum = 0;
  let digitCount = 0;
  while (num >= 1) {
    digitCount++;
    digitRaisedToPowerSum += (num % 10) ** 3;
    console.log((num % 10) ** 3, "<-----single digit cubed----------------");
    num = Math.floor(num / 10);
    // console.log("num->", num);
  }
  console.log("total count------->", digitRaisedToPowerSum);
  // console.log("digit count", digitCount);
  if (digitRaisedToPowerSum === initialNum) {
    return true;
  } else {
    return false
  }
}

console.log(checkArmstrongNum(371));  // true
console.log(checkArmstrongNum(1634));  // flase


