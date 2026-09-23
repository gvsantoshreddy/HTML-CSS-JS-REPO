// 10. Reverse a number
let n = 12345;
let reversed = Number(String(Math.abs(n)).split("").reverse().join(""));
console.log("Reversed:", n < 0 ? -reversed : reversed);
