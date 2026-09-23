// 50. LCM of two numbers
function gcd(a, b) {
  while (b !== 0) [a, b] = [b, a % b];
  return Math.abs(a);
}
let a = 12, b = 18;
console.log("LCM:", Math.abs(a * b) / gcd(a, b));
