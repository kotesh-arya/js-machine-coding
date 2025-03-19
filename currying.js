
// Sum operation using Currying in js

// function currySum(first) {
//     return function (second) {
//         return function (third) {
//             console.log(first + second + third)
//         }
//     }
// }


// currySum(4)(3)(2); // 10


// Infinite currying

function curriedSum(a) {
    return function (b) {

        if (b !== undefined) {
            return curriedSum(a + b);   
        } else {
            return a
        }
    };
}


console.log(curriedSum(2)(3)()); // 2 + 3 = 5

console.log(curriedSum(5)(4)(3)(2)(1)()); // 5 + 4 + 3 + 2 + 1 = 15


// In a game, there is a pile of stones, and two players, A and B, take turns to pick either 1 or 2 stones. Player A starts first. 
// The player who takes the last stone loses the game,
// your task is to determine which player will win, or if there is not winner.

// - If there's a winning strategy, return the player's name.
// - If there's no winner, return null.


function findWinner(n) {
    if (n === 1) return "B";
  
  // If the number of stones is 2, Player A picks all and loses.
  if (n === 2) return "A";
  
  // If the number of stones is 3, Player A can leave 1 stone for B to pick and win.
  if (n === 3) return "A";
  
  // If the number of stones is 4, whatever A picks (1 or 2), B can always win.
  if (n === 4) return "B";
  
  // General case: If A can force B into a losing position, A wins.
  return (findWinner(n - 1) === "B" || findWinner(n - 2) === "B") ? "A" : "B";
}

console.log(findWinner(1));  // B
console.log(findWinner(2));  // A
console.log(findWinner(3));  // A