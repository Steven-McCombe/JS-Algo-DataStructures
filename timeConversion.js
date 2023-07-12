function timeConversion(s) {
    // Write your code here
    
//Here we are slicing the last two chars in the input string 
let checkAMPM = s.slice(-2)
//Slice the string to get the hour
let hours = s.slice(0,2)
//Slice the remainder of the string (except for the last two) which should not change under either conditional. 
let minsandsec = s.slice(2,8)
//Conditional to check if the string contain the edge case of 12AM
if (hours == '12' && checkAMPM =='AM'){
    let hours = '00'
    return (`${hours}${minsandsec}`)
} else if (hours == '12' && checkAMPM =='PM'){
    let hours = '12'
    return (`${hours}${minsandsec}`)
} else if (checkAMPM == 'AM') {
  return (`${hours}${minsandsec}`)  
} else {
    hours = parseInt(hours)
    hours +=12
    return (`${hours}${minsandsec}`)  
}
}
console.log(timeConversion('12:45:54PM'))