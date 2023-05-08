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


//Lets refactor and make this O(n)

function same(arr1, arr2) {
      //initial check to see if the arrays are the same length. if not return false.
    if(arr1.length !== arr2.length) {
        return false;
    }
    //Declare two variables as empty objects.
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // Iterate through arr1 and count the frequency of each value.
    // Store the value as a key in frequencyCounter1 with its frequency as the value.
    for (let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
    }

    // Iterate through arr2 and count the frequency of each value.
    // Store the value as a key in frequencyCounter2 with its frequency as the value.
    for (let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
    }

    // Iterate through the keys in frequencyCounter1.
    for (let key in frequencyCounter1){
        // Check if the square of the key is present in frequencyCounter2.
        // If not, return false.
        if (!(key ** 2 in frequencyCounter2)){
            return false
        }
        // Check if the frequency of the squared key in frequencyCounter2 is equal to the frequency of the key in frequencyCounter1.
        // If not, return false.
        if (frequencyCounter2[key **2] !== frequencyCounter1[key]){
            return false
        }
    }
    // If all checks pass, return true.
    return true 
}

console.log(same([2,4,6,8],[4,16,36,64])) //true
console.log(same([2,4,6,8],[4,16,36,63])) //false

//Anagram Challenge

//Given two strings, write a function to determine if the second string is an anagram of the first. 
//An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema formed from iceman. 

function validAnagram(str1, str2){
    //first we need to check the length of both strings, if they are not equal it can't be true. 
    if (str1.length !== str2.length){
        return false;
    }
    // create two empty object to store the new string elements
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //loop through each string and add a new kew to the object along with the frequency
    for(let val of str1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of str2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)){
            return false
        }
        if (frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}
console.log("\n------------ Valid Anagram -------------")
console.log(validAnagram('','')) // T
console.log(validAnagram('aaz','zza')) // F
console.log(validAnagram('anagram','nagaram')) // T 
console.log(validAnagram('rat','car')) // F
console.log(validAnagram('awesome','awesom')) // F
console.log(validAnagram('qwerty','qeywrt')) // T
console.log(validAnagram('texttwisttime','timetwisttext')) // T 