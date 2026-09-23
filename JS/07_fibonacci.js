// 7. Fibonacci series
let terms = 10, a = 0, b = 1;
let series = [];
for (let i = 0; i < terms; i++) {
  series.push(a);
  [a, b] = [b, a + b];
}
console.log(series.join(" "));
