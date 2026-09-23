// 18. Arrays and array methods
let arr = [1, 2, 3, 4, 5];
console.log("Original:", arr);
console.log("map:", arr.map(x => x * 2));
console.log("filter:", arr.filter(x => x % 2 === 0));
console.log("reduce:", arr.reduce((a, b) => a + b, 0));
arr.push(6);
console.log("After push:", arr);
