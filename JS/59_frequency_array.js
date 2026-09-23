// 59. Frequency of each array element
let arr = ["a", "b", "a", "c", "b", "a"];
const frequency = {};
for (const item of arr) frequency[item] = (frequency[item] || 0) + 1;
console.log(frequency);
