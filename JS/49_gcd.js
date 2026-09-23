// 49. GCD of two numbers
let a = 48, b = 18;
while (b !== 0) [a, b] = [b, a % b];
console.log("GCD:", Math.abs(a));
