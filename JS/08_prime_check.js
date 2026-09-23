// 8. Check whether a number is prime
let n = 29, isPrime = n > 1;
for (let i = 2; i <= Math.sqrt(n) && isPrime; i++) {
  if (n % i === 0) isPrime = false;
}
console.log(isPrime ? "Prime" : "Not Prime");
