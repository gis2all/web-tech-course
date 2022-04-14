// Javascript Loops (for, while, do while)

var students = ["Timmy", "Janessa", "Arun"];

for (var i = 0; i < students.length; i++) {
    console.log(students[i]);
}

for (const element of students) {
    console.log(element);
}

var text = "";
var i = 0;
while (i < 10) {
    text = "The number is " + i;
    console.log(text);
    i++;
  }