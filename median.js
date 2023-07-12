function findMedian(arr) {
    // Write your code here
arr.sort()
let mid = Math.floor(arr.length /2)
if (arr.length % 2 !== 0){
    return arr[mid]
} else {
    let val1 = arr[mid - 1]
    let val2 = arr[mid]
    let midindex = (val1 + val2) / 2
    return midindex
}
}

const testCases = [
    // Odd length array
    { arr: [7, 3, 1, 4, 2, 5, 6], expected: 4 },
    
    // Even length array
    { arr: [9, 1, 5, 3, 2, 6], expected: 4 },
  
    // Array with negative numbers
    { arr: [-3, -1, -5, -2, -4], expected: -3 },
  
    // Array with duplicate values
    { arr: [10, 5, 2, 5, 8], expected: 5 },
  
    // Array with all equal values
    { arr: [3, 3, 3, 3], expected: 3 },
  
    // Array with single element
    { arr: [9], expected: 9 },
  
    // Array with two elements
    { arr: [6, 2], expected: 4 },
  ];
  
  // Perform the test cases
  testCases.forEach(({ arr, expected }) => {
    const median = findMedian(arr);
    console.log(`Array: [${arr}], Median: ${median}, Expected: ${expected}`);
  });