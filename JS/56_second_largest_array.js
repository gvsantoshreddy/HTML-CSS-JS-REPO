// 56. Second-largest element in an array
let arr = [10, 5, 20, 8, 20, 15];
let unique = [...new Set(arr)].sort((a, b) => b - a);
console.log("Second largest:", unique[1]);
