// func statement
// name()
// function name() {
//     console.log("hello");
// }

// fuction expression
// a()
// var a = function (){
//     console.log("hello");
// }

// anonymous function
//  var b = function (){
//     console.log("hello")
// }

// first class functions
// function name(func){
//     return function (){

//     }
// }
// name(function(){});

// Arrow function

// var name = () => "hello"

// name();

// values and variables
// var a = 5; // _name, $name, name, Name, 5name

// 1. 10 + 20 30
// 2. 10 + "20"  "1020"
// 3. 9 - "4" 5
// 4. "hello" - "sir" NaN
// 5. true + true  2
// 6. true + false 1

// var a = 5;
// var b = "5";

// console.log(a==b);
// console.log(a===b);
// operators
// 3**3
// 1. assignment operator =
// 2. Arithmetic operator + - */% -- ++
// 3. comparison operator > < >= <= != == ===
// 4. logical operator && || !
// 5. string operator (+)
// 6. exponentiation operator

// truthy and falsy values
// null, undefined "" 0 NaN

// var a = 2;

// function double(num){
//  var ans = num * 2;
//  return ans;
// }

// var c = double(a);
// console.log(c);

// var a  = 10;
// var a = 100;

// const a = 10;

// default parameter
// function name(a,b=2){
//   console.log(`${a+b}`);
// }

// name(5,3);

// arrow function
// const name = (a,b=10) => "hello"
// name(5)

// arr.length
// arr[i]
// for in for of loop

// for(let index in arr){
//   console.log(arr[index]);
// }
// 0 1 2

// for(let element of arr){
//   console.log(element);
// }
// 1 undefined string
// let arr = [1,undefined,"string"];
// arr.forEach((element) => {
//     console.log(element)
// })

var sarr = [1, "name", 3, 1, 5];
// // searching
// sarr.indexOf(1);
// sarr.lastIndexOf(1,3);

sarr.includes("name");

// var i =1;
// while(i<=6){
//     if(i === 5) continue;
//     console.log(i);
//     i++;
// }

// var a = 10;
// var a = 100;

// let a = 10;
// let a = 100;

// var i = 1;
// console.log(" Hello" + i + "Hscn");
// let i=1;

// console.log(`Hello ${10+20} Hscn`);

// const add = (a,b=2) => {
//     console.log(`${a+b} is the ans`);
// }

// add(5,3);
