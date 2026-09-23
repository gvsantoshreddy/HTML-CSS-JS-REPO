// 65. Frequency of characters in a string
let str = "hello world";
const frequency = {};
for (const ch of str.replace(/\s/g, "")) frequency[ch] = (frequency[ch] || 0) + 1;
console.log(frequency);
