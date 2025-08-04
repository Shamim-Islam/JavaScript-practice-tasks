/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

for (var i = 1; i <= experience; i++) {
  startingSalary = startingSalary + startingSalary * (5 / 100);
}

console.log(startingSalary.toFixed(2));
