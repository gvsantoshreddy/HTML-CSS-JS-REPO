// 63. Count vowels and consonants
let str = "JavaScript";
let vowels = 0, consonants = 0;
for (const ch of str.toLowerCase()) {
  if (/[a-z]/.test(ch)) /[aeiou]/.test(ch) ? vowels++ : consonants++;
}
console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
