//Write a function that accepts a string input and returns a reversed copy
//Function one 
// function reverse1(s) {
//     let o = '';
//     for (let i = s.length -1; i >= 0; i--)
//     o += s[i];
//     return o
// }
//Function two
// function reverse2(s) {
//     return s.split('').reverse().join('');
// }

// let string = "Hi My Name is Steven."

// console.log("Method 1: " + reverse1(string))
// console.log("Method 2: " + reverse2(string))


//----------------- Calculate the sum of all numbers adding up to and including n -----------------------
// Comparing two solutions to the same problem.
// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.
//In this code we are itterating through each number. This becomes an issue when the variable total is a large number as the steps increase. 
function addUpTo1(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}


function addUpTo2(n) {
    return n * (n + 1) /2;
}

let t1 = performance.now();
console.log(addUpTo2(1000000000))
let t2 = performance.now()
console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds.`)

//The difference between these functions is one second. 2 performs the function 1 second faster when n is 1000000000