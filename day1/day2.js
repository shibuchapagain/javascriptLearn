// function test() {
//   // line of code
//   console.log("testing");
//   console.log("javascript");
//   return;
// }

// test();
// test();
// test();

// let num1 = 3;
// let num2 = 5;

// let add = num1 + num2; // ->
// console.log(add);

// //  11, 22
// let num3 = 11;
// let num4 = 22;
// console.log(num3 + num4, "test");

// typescript ->
// let num: number= 5;

// function addition(num1, num2) {
//   // NaN -> NOT A NUMBER;
//   //   console.log(num1 + num2);
//   let total = num1 + num2;
//   return total;
// }

// addition(2);
// let getOutput = addition(3, 9);
// addition(11, 22);
// console.log(getOutput);
// console.log(addition(1, 1));

// console.log( development)

/// --> addition:
// function addition(...numbers) { // parament
//   // spread operator --> es6
//   // 2 parament -->
//   console.log(...numbers);
// }
// addition(1, 2, 3, 4, 5, 6); // arguments

// ARRAY:
// let data = [1, 2, 3]; // -> start index 0 ->
// console.log(data.length, "test1"); // total length ->
// console.log(data.push(4));
// data.push(4); // insert
// console.log(data, "test2");
// console.log(data.pop());

// console.log(data[2]);

// let data = [1, 2, 3]; //
// let newData = [...data]; // spread operator ...

// object -> {}

// data.push(5);

// console.log(data, "test1"); // 1,2,3,5
// console.log(newData, "test2"); // 1,2,3,5

// console.log(newData, "newData"); //

///
// let data = [1, "js", true]; // data-> 1,2,3 --> data (1,2,3); // store ->
// let newData = data; // newData=data; // (data memory location);
// let data2 = [1, 2, 3, 4];

// memory --> data 1,2,3
// newData --> data

// newData()

// console.log(data, "test1"); // 1,2,3
// console.log(newData, "test2"); // 1,2,3

// data.push(4);

// newData.push(5); // [1, 'js', true, 5]

// console.log(data, "data"); // 1,2,3,4
// console.log(newData, "new data"); // 1,2,3

// 1) 2) 3)

// 1) function declaration ->
// 2) function expression ->
// 3) Arrow function ->
// 4) Annonymous function  -> automatically

// -> hotel --> bill 50,75 (tax-> 10%, 85-105, (17%), 110+ (21)) -> 55 + 2 -> khaja-> tax(99, tax-> 4);
// function ->
// khaja paisa -> `you khaja billl is 220, khaja(200, tax-> 20);

////////////////////////////////////////////////////////////////////////
// DAY 03->

// FUNCTION DECLARATION:
// function testing() {
//   console.log("function declaration");
//   return 5;
// }

// const output = testing();
// console.log(output);

// FUNCTION EXPRESSION:
// const calculateAge = function () {
//   // line of code:
//   return 5;
// };

// console.log(calculateAge());

// FUNCTION DECLARATION EXAMPLE:

// function test() {
//   // line of code
//   console.log("test");
// }
// test();

// function calcAge(birthYear) {
//   return 2023 - birthYear;
// }
// const age = calcAge(1999);
// console.log(age);

// FUNCTION EXPRESSION:
// const age = function (birthYear) {
//   // birth year -> parameter
//   return 2023 - birthYear;
// };

// console.log(age(1999)); // 1999 -> argument

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// // console.log(calcAge(1990));
// let data = calcAge(2000);
// console.log(data);

// ARROW FUNCTION:
// const calcAge = () => {
//   return 5;
// };

// console.log(calcAge());

// arrow function example:
// const calcAge = (birthYear) => {
//   return 2023 - birthYear;
// };
// console.log(calcAge(1999));

// const calcAge = (firstName, birthYear) => {
//   let age = 2023 - birthYear;
//   return `${firstName} age : ${age}`;
// };
// console.log(calcAge("js", 2000));

// ADMIN -> faker used (admin db data);

// self invoking
// console.log("test1");
// (function () {
//   console.log("iam self invoking");
// })();
// console.log("test2");

//

// let data = [1, 2, 3, 4, 5];
// let data2 = [...data];
// console.log(data2);

// console.log(data);

/// ARROW FUNCTION: EXAMPLE
// const totalSum = (...numbers) => {
//   console.log(numbers, "test1");
//     console.log(num1, "num1");
//     console.log(num2, "num2");
//     console.log(...numbers, "test");
//     let sum = 0;
//     for (const num of numbers) {
//       // for of -> values (index ** for in);
//       sum += num;
//     }
//     return sum;
// };

// console.log(totalSum(1, 2, 3, 4, 5, 6, 7));

//////////////////////////////////////////////
// ARROW FUNCTION:
// const calcAge = (birthYear) => {
//   return 2023 - birthYear;
// };
// // // calcAge();
// // console.log(calcAge(2000));

// /////////////////////////// -->
// // age -> calculate age // old

// //
// const yearsUtilRetriment = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 50 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };

// console.log(yearsUtilRetriment(1900, "js")); // argument (2000, "js");

// FUNCTION DECLARATION:

// test();

// function test() {
//   // function execute:
//   console.log("i already call you");
// }

////

// function declaration:

// test();

// const test = function () {
//   console.log("test function");
// };

// let a = 10;
// console.log(a);

////////////////////////////////////////////////////// ->
// console.log(a);
// let a = 5;
// let b = 10;

// function test() {
//   let d = 22;
//   console.log(a, b, "test"); // 5, 10
//   if (true) {
//     let c = 11; // blocked scope
//     console.log(a, b, c, "test1"); // 5,10, 11
//   }
//   console.log(a, b, c, d, "test3"); // d -> function scope:
// }

// test();
