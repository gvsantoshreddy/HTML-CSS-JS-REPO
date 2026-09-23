// 11. Sum of digits
let n = 12345;
let sum = String(Math.abs(n)).split("").reduce((total, d) => total + Number(d), 0);
console.log("Sum of digits:", sum);
