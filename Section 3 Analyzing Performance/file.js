//--------------Objectives-----------------
//Understand how objects and arrays work through the lens of Big O
//Explain why adding elements to the beginning of an array is constly.
//Compare and contrast the runtime for arrays and objects, as well as built in methods.


//---------------Objects---------------
//Unordered data structures. Stored with key value pairs. 

//When to use objects.
//When you dont need order
//Fast insertion and removal.

//Javascript is able to add and store, update, retrieve and remove new information in an object in constant time.
//Fast operations.  
//When you dont need ordering objects are an excellent choice.
//-- Insertion O(1)
//-- Removal O(1)
//-- Searching O(n) 
//-- Access O(1)

// let instructor = {
//     firstname: "Kelly",
//     isInstructor: true,
//     favoriteNumbers: [1,2,3,4],
// }

// console.log(Object.keys(instructor))
// console.log(Object.entries(instructor))

//Methods
//-- Object.keys O(n)
//-- Object.values O(n)
//-- Object.entries O(n)
//-- hasOwnProperty O(1)

//as the object grows so does the number of operations it takes to compile the methods. 


//------------------ARRAYS--------------------

let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"];

//When to use arrays
//When you need order
//When you need fast access/insertion and removal (sort of...)

//Access O(1)
//Searching o(n)
//Insertion - Pushing to the end is constant time O(1). Inserting to the start of an array has to re-index the remainder of the elements in the array. O(n)
//Removal - Removal of the last item on an array is constant time O(1). Removal from anywhere else in the array is O(n)

// let arr = [1, 2, 3];
// arr.push(4); // arr now contains [1, 2, 3, 4]
//O(1)

// let arr = [1, 2, 3, 4];
// let lastElement = arr.pop(); // lastElement contains 4, and arr now contains [1, 2, 3]
//O(1)

// let arr = [1, 2, 3, 4];
// let firstElement = arr.shift(); // firstElement contains 1, and arr now contains [2, 3, 4]
//O(n)

// let arr = [1, 2, 3, 4];
// let firstElement = arr.shift(); // firstElement contains 1, and arr now contains [2, 3, 4]
//O(n)

//concat o(n)
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let newArr = arr1.concat(arr2); // newArr contains [1, 2, 3, 4, 5, 6]

//splice o(n)
// let arr = [1, 2, 4, 5];
// arr.splice(2, 0, 3); // Inserts 3 at index 2. arr now contains [1, 2, 3, 4, 5]
// arr.splice(1, 2); // Removes 2 elements starting from index 1. arr now contains [1, 4, 5]
// arr.splice(1, 1, 2, 3); // Replaces 1 element at index 1 with 2 and 3. arr now contains [1, 2, 3, 5]

//slice o(n)
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(1, 4); // newArr contains [2, 3, 4]
// let anotherArr = arr.slice(2); // anotherArr contains [3, 4, 5]


//sort - O(n * log N)

//forEach/map/filter/reduce/etc - O(n)
