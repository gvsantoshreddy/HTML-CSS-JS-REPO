// 66. Regular expressions
let text = "The price is 500 rupees.";
console.log("Contains number:", /\d+/.test(text));
console.log("All numbers:", text.match(/\d+/g));
console.log("Replace spaces:", text.replace(/\s+/g, "-"));
