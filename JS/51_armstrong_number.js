// 51. Armstrong number
let n = 153;
let digits = String(n).split("");
let power = digits.length;
let sum = digits.reduce((s, d) => s + Number(d) ** power, 0);
console.log(sum === n ? "Armstrong number" : "Not an Armstrong number");
