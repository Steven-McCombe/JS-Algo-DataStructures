//Write a function that accepts a string input and returns a reversed copy
function reverse(s) {
    let o = '';
    for (let i = s.length -1; i >= 0; i--)
    o += s[i];
    console.log("Method One:" + o)
    return o
    
}

reverse("Hi my name is steven.")