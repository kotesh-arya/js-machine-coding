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
pattern2(4);
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
pattern3(4);
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
pattern4(4);
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
pattern5(5);
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
pattern6(5);
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
pattern7(5);
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
pattern8(5);
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
pattern9(5);
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
pattern10(5);
