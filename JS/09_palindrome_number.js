// 9. Check whether a number is a palindrome
let n = 1221;
let s = String(n);
console.log(s === s.split("").reverse().join("") ? "Palindrome" : "Not Palindrome");
