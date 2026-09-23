// 40. Classes and objects
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
const s1 = new Student("Ravi", 20);
s1.display();
