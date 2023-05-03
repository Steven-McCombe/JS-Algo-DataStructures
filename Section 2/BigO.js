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
// function addUpTo1(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }


// function addUpTo2(n) {
//     return n * (n + 1) /2;
// }

// let t1 = performance.now();
// console.log(addUpTo2(1000000000))
// let t2 = performance.now()
// console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds.`)

//The difference between these functions is one second. 2 performs the function 1 second faster when n is 1000000000

//-------------THE PROBLEM WITH TIME --------------------
//different machines will record different times.
//The same machine will also record different times.
//For fast algorithms, speed measurements may not be precise enough.
//So how do we talk in general terms without having to use time?

//-------------THATS WHERE BIG O NOTATION COMES IN -----------------
// Rather than counting seconds(which can be so variable).
// Lets count the number of simple operations the computer has to perform. 

//Lets look at 
// function addUpTo2(n) {
//     return n * (n + 1) /2;
// }
// Here we have 1 multiplication, 1 addition and 1 division.
// There are 3 operations. So it does not matter what N is. There will always only be 3 operations. 

//Now lets look at our other function
// function addUpTo1(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }

//So depending on the size of n. this will determine the amount of operations. 
//Regardless of the exact number, the number of operations grows roughly proportionally with n.


//-----------BIG O SHORTHANDS ------------------
//1. Arithmetic operations are constant.
//2. Variable assignment is constant.
//3. Accessing elements in an array (by index) or object (by key) is constant.
//4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

//-------------SPACE COMPLEXITY ------------------
//Auxillary Space complexity refers to the space required by the algorithm, not including the space taken up by the inputs.

//Rules of thumb
//Most primatives (Booleans, numbers, undefined, null) are constant space
//Strings require O(n) (Where n is the length of the string)
// Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects).

//-------------LOGARITHMS--------------
//The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value thats less than or equal to one. 