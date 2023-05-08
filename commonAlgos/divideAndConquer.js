//DIVIDE AND CONQUER

//This pattern involves dividing a data set into smaller chunks and then repeating a preocess with a subset of data.

//This pattern can tremendously decrease time complexity.

//We take a large set of data and start by dividing it into smaller pieces. We then proceed to do something with the smaller pieces and decide where to go next. 

// Example

//Given a sorted array of integers, write a function called search, 
//that accepts a value and returns the index where the value passed to the function is located. 
//If the value is not found, return -1

//Naive Approach

function linearSearch (arr, val){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i
        }
    }
    return -1
}

console.log(linearSearch([1,2,3,4,5,6],4)) // 3
console.log(linearSearch([1,2,3,4,5,6],6)) // 5 
console.log(linearSearch([1,2,3,4,5,6],11)) //-1