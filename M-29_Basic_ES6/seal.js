const employee = {
  name: "Raja Rani",
  designation: "QA",
  salary: 20000,
  experience: 1,
  age: 22,
};

// seal ---------------------- Only allowed modify action
Object.seal(employee);

// delete
delete employee.age;

// update/modify
employee.salary = employee.salary + 5000;

// add
employee.location = "Dhaka";

console.log(employee);
