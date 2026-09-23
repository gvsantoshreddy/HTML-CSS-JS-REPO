// 62. Check whether a string is a palindrome
let str = "madam";
let reversed = str.split("").reverse().join("");
console.log(str === reversed ? "Palindrome" : "Not Palindrome");
