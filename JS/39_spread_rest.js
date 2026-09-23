// 39. Spread and rest operators
const a = [1, 2, 3];
const b = [4, 5, ...a];
console.log("Spread:", b);
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log("Rest:", sum(1, 2, 3, 4));
