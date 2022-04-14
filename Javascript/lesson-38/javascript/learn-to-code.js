// Javascript Arrays

var student1 = "Timmy";
var student2 = "Janessa";
var student3 = "Arun";

var students = [student1, student2, student3];

console.log(students[0]);

students.forEach(element => {
    console.log(element);
});

var naughtyList = [];
naughtyList.push(students[0]);
naughtyList.forEach(element => {
    console.log(element);
});

var index = naughtyList.indexOf("Timmy");
console.log(index);

if(index > -1){
    naughtyList.splice(index, 1);
}
console.log(naughtyList);

// var person = ["John", 12, "USA", true]; 不建议使用