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
pattern1(4);


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
pattern2(4);

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
pattern3(4);