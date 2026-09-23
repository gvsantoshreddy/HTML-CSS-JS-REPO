// 52. Perfect number
let n = 28, sum = 0;
for (let i = 1; i <= n / 2; i++) if (n % i === 0) sum += i;
console.log(sum === n ? "Perfect number" : "Not a perfect number");
