// Write a program to reverse a string

const str = "JavaScript is awesome"

function reverseAString(string) {
    // write your solution here
    let array = string.split("");
    let reverseArr = array.reverse().join("");
    return reverseArr;
}

console.log(`Reversed string is: ${reverseAString(str)}`)