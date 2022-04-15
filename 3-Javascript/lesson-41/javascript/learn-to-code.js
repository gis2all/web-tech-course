// Javascript Objects
// https://www.w3schools.com/js/js_object_definition.asp

// 在JavaScript中，几乎“一切”都是一个对象。

// 布尔值可以是对象（如果使用关键字定义）new
// 数字可以是对象（如果使用关键字定义）new
// 字符串可以是对象（如果使用关键字定义）new
// 日期始终是对象
// 数学始终是对象
// 正则表达式始终是对象
// 数组始终是对象
// 函数始终是对象
// 对象始终是对象

// 单一对象, var 可变
var person = "John Doe";
let person2 = "John Doe";

// 多个对象, let & const 不可变
let person3 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

const person4 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// 竖着写
const person5= {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// 空对象然后赋值
const person6 = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

// 使用 new Object()
const person7 = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


// 对象引用赋值
const person8 = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

const x = person8;
x.age = 10;      // Will change both x.age and person.age
console.log(person8.age); // Will print 10
console.log(x.age);      // Will print 10

// 更多资料参考 W3School