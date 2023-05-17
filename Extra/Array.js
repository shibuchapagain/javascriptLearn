let product = [];

let data1 = [1, 2, 3];
let data2 = [4, 5, 6];

product.push(data1); // array -> array insert
product.push(data2);

// [[1,2,3], [4,5,6]];

// console.log(product, "test");
// console.log(product[1]);

// console.log(product?.length); // length -> 1,2 // index -> 0, -->
// const data = [ // array of an object:
//   {
//     id: 33,
//     name: "js",
//   },
//   {
//     id: 34,
//     name: "jss",
//   },
// ];

// data.length > 1 ? // operation : return null

//
// let data = [1, 2, 3, 4];

// console.log(data.unshift());
// const data4 = [8, 9];
// product.unshift(data4);
// console.log(product);

// product.unshift(data1); // array --> 0 index --> unshift();
// console.log(product);
// console.log(product, "after unshift"); // in product i get data1, data1, data2

// // SHIFT:
// console.log(product);
// product.shift();
// console.log(product); // // 1st index remove:

// // POP
// console.log(product);
// product.pop();
// console.log(product); // remove last element:

// SLICE:
let fruits = ["banana", "orange", "mango", "watermelon"]; // 0, 1, 2, 3
//
// console.log(fruits); // retrieve all data from fruits:
//
// console.log(fruits.length); // to calculate total length;
//
// fruits.shift();
// console.log(fruits); // remove banana from fruits array:
//
// fruits.pop();
// console.log(fruits); // remove last element:
//
// fruits.slice(0, 2); // 0 -> 0 index , 1-> number of items
// console.log(fruits);

//
// fruits.splice(0, 2); // it return mango and watermelon: that means it remove banana and orange -> they are index 0 and index 1
// console.log(fruits);

// fruits.splice(1, 1); // start from index 1 and delete count 1
// console.log(fruits);

// IMPORTANT:
// fruits.splice(0, 3); // start at 0 and delete 3 item,
// console.log(fruits);

//
// we can add as well:
// fruits.splice(1, 0, "smth");
// console.log(fruits); // [ 'banana', 'add', 'orange', 'mango', 'watermelon' ]

// fruits.splice(4, 1, "maybe");
// console.log(fruits); // [ 'banana', 'orange', 'mango', 'watermelon', 'maybe' ]

// fruits.splice(3, 1, "maybe");
// console.log(fruits); // [ 'banana', 'orange', 'mango', 'maybe' ]
//////////////////////

// AT:
// const array1 = [1, 2, 3, 4];
// console.log(array1[3]); // short hand rule
// console.log(array1.at(3)); // inbuilt  // 1 index has value: 2 // at(index)-> array index --> value

// console.log(array1.at(-1)); // return last element which is: 4
// console.log(array1.at(-3)); // return 2:

// CONCAT:
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let total = array1.concat(array2);
// console.log(total); // [ 1, 2, 3, 4, 5, 6 ]

// EVERY:
// let array = [1, 2, 3, 4];
// console.log(array.every((num) => num > 0)); // 1>1 --> false && --> false
// // console.log(array.every((num) => num > 3)); // false
// console.log(array.every((num) => num > 0)); // true

// FILTER

// let name = "javascript";
// console.log(name.length); // 1-> index -> 0
// let names = ["roman", "monica", "jessica", "jack"];
// const result = names.filter((name) => name.length > 5);
// console.log(result);

// const numbers = [1, 2, 10, 11, 23, 12];
// console.log(numbers.filter((num) => num > 10));

// const result = names.filter((name) => name.length > 3);
// console.log(result); // [ 'roman', 'monica', 'jessica', 'jack' ]

// FIND:
// const array1 = [1, 2, 3, 4];
// const result = array1.find((num) => num > 1);
// console.log(result); // return first one: 2

// let users = [
//   {
//     _id: 1,
//     email: "a@gmail.com",
//     password: 12345,
//   },
//   {
//     _id: 2,
//     email: "b@gmail.com",
//     password: 12345,
//   },
// ];

// user input:
// let userInput = "a@gmail.com";
// const isAlreadyExist = users.find((user) => {
//   return user.email === userInput;
// }); // mysql --> findAll(); // mongodb -> find() --> findById(2);
// // console.log(isAlreadyExist, "tets1");
// // console.log(Array(isAlreadyExist), "test2");
// const check = Array(isAlreadyExist)?.length ? true : false; // short
// console.log(check);

// short
// FLAT:
// const arr1 = [0, 1, 2, [3, [4, [5, 6]]]];
// // console.log(arr1); // [0,1,2,3,4];
// console.log(arr1.flat(Infinity)); // [ 0, 1, 2, 3, 4 ]
// const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat(Infinity)); // [ 0, 1, 2, 3, 4 ]

// FOREACH:
// const array1 = ["a", "b", "c"];
// // array1.forEach((element) => console.log(element)); // A,B,C
// // let data = array1.forEach((item) => item); // empty:
// let data;
// console.log(data); // undefined -> foreach doesn't return:

// console.log(name);

// MAP:
// const array1 = [1, 4, 9, 16];
// // Pass a function to map
// const map1 = array1.map((x) => x * 2); // [2,8,18,32]
// console.log(map1);
// // Expected output: Array [2, 8, 18, 32]

// sort:
// const array1 = [1, 30, 4, 21, 100000];
// // array1.sort();
// // console.log(array1);
// // console.log(array1); // [ 1, 100000, 21, 30, 4 ]
// // // // Expected output: Array [1, 100000, 21, 30, 4]
// const sortData = array1.sort((a, b) => a - b); // (a,b)=> b-a;
// console.log(sortData); // [ 1, 4, 21, 30, 100000 ]

// const sortDataDesc = array1.sort((a, b) => b - a);
// console.log(sortDataDesc); // [ 100000, 30, 21, 4, 1 ]

// INCLUDES:
// const array1 = ["a@gmail.com", "b@gmail.com"]; // 2
// console.log(array1.includes("a@gmail.com")); // return boolean:
// // Expected output: true

// const pets = ["cat", "dog", "bat"];

// console.log(pets.includes("cat"));
// // Expected output: true

// console.log(pets.includes("at"));
// // Expected output: false

///// -->
// file upload: --> profile pics, file, pdf, .docs -->

// abc.pdf -->
let validExtension = ["jpg", "png", "smth", "svg"];
console.log(validExtension.includes("pdf")); // -> invalid p
// console

//////////////////////////////////////////////////////////////////////////
