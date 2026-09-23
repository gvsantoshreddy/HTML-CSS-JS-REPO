// 38. ES6 let, const, template literals, destructuring
let name = "Anu";
const age = 21;
console.log(`${name} is ${age} years old.`);
const student = { name: "Anu", age: 21 };
const { name: studentName, age: studentAge } = student;
console.log(studentName, studentAge);
