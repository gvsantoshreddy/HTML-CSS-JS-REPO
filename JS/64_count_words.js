// 64. Count words in a string
let str = "JavaScript is easy to learn";
let words = str.trim() ? str.trim().split(/\s+/) : [];
console.log("Word count:", words.length);
