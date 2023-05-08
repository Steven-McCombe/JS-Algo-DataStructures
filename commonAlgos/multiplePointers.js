//-------------MULTIPLE POINTERS--------------
 
// What is a multiple pointers algo?

// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition. 

// Very efficient for solving problems with minimal space complexity as well.

// The data must be sorted for this to work. 

//-------------Examples----------------

//Write a function called sumZero which accepts a sorted array of integers. 
//The function should find the first pair where the sum is 0. 
//Return an array that includes both values that sum to zero or undefined if a pair does not exist.

//Naive Solution
//Time Complexity = O(N^2)
//Space Complexity = O(1)
function sumZeroBad(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if (arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

// console.log(sumZeroBad([-3,-2,-1,0,1,2,3])) // [-3,3]
// console.log(sumZeroBad([-2,0,1,3])) // undefined
// console.log(sumZeroBad([1,2,3])) // undefined

//------------------- Refactored ---------------------
function sumZero(arr){
    // Initialize two pointers, left and right, to the first and last elements of the input array, respectively.
    let left = 0
    let right = arr.length -1
    // Continue the loop until the left pointer is less than the right pointer.
    while (left < right) {
        // Calculate the sum of the values at the left and right pointers.
        let sum = arr[left] + arr[right];
    
        // Check if the calculated sum is equal to zero.
        if (sum === 0) {
            // If the sum is zero, return an array containing the values at the left and right pointers.
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            // If the sum is greater than zero, decrement the right pointer to try a smaller value.
            right--;
        } else{
            // If the sum is less than zero, increment the left pointer to try a larger value.
            left++;
        }
    }
    // If the function reaches this point, no pair of elements with a sum of zero has been found. The function will implicitly return undefined.

}

// console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]))


///----------------CHALLENGE ------------------------

//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
//There can be negative numbers in the array. but it will always be sorted.

function countUniqueValues (arr) {
    //If the array is empty then there will be no unique values. Return Zero.
    if (arr.length === 0){
        return 0
    }
    let left = 0
    let right = 1
    while (left < right && right < arr.length){
        if (arr[left] === arr[right]){
            arr.splice(right, 1)
        } else {
            left++;
            right++;
        }
    }
    return arr.length
}

console.log(countUniqueValues([1,1,1,1,1,2])) //2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) //7
console.log(countUniqueValues([])) //0
console.log(countUniqueValues([-2,-1,-1,0,1])) //4
console.log(countUniqueValues([
    1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 15, 16, 17, 18, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
    80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
    100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
    120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139,
    140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159,
    160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179,
    180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199
  ])) //198
