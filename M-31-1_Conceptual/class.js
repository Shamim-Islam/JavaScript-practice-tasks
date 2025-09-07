// class

class Student {
  constructor(name, roll, marks) {
    (this.name = name), (this.roll = roll), (this.marks = marks);
  }
  getInfo() {
    console.log(`Name: ${this.name}, Roll: ${this.roll}, Marks: ${this.marks}`);
  }
}

const s1 = new Student("shamim", 29, 44);
console.log(s1);
