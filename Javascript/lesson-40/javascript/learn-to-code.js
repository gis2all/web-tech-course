// Javascript Functions and methods
// https://www.w3schools.com/js/js_function_definition.asp

function add(num1, num2) {
    return num1 + num2;
}

// 函数表达式
const x = function (a, b) {
    return a + b;
}
let z = x(1, 2);
console.log(z);


// 结构体函数
const myFunction = new Function("a", "b", "return a + b");
let y = myFunction(3, 4);
console.log(y);



// 在函数定义前调用
console.log(myFunction2(5));

function myFunction2(y) {
  return y * y;
}

// 自调用函数, 自动触发
(function () {
    let result = "Hello!!";  // I will invoke myself
    console.log(result);
})();


// 函数是对象


function myFunction3(a, b) {
    return arguments.length;
}
console.log(myFunction3(1, 2));

function myFunction4(a, b) {
    return a * b;
}
let text = myFunction4.toString();
console.log(text);