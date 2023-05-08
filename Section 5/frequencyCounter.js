//Write a function call same, which accepts two arrays. 
//The function should return true if every value in the array has its corresponding value squared in the second array. 
//The frequency of values must be the same.


//This function works but the complexity is O(n2)
function badSame(arr1, arr2) {
    //initial check to see if the arrays are the same length. if not return false.
    if(arr1.length !== arr2.length) {
        return false;
    }
    // Loop through the first array
    for (let i = 0; i < arr1.length; i++){
    //checks to see if a given element is found in the array. and returns the index if true or -1 if not found.
    // In this case we are squaring the element in the first array and trying to find it in the second.
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false
        }
        //here we are removing one element at the correct index. and repeating the if statement until a true or false condition is met.
        arr2.splice(correctIndex,1 )
    }
    // if the function passes all the above checks it must return true.
    return true
}


console.log(badSame([2,4,6,8],[4,16,36,64])) //true
console.log(badSame([2,4,6,8],[4,16,36,63])) //false
