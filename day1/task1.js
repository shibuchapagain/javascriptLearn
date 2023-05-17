// ////////////////////////////////////////////////////////////////

// let numbers = [1, 2, -5, 6, -3, 9, -10, -4];

// // odd -> 1,9 -> 10
// // even -> 2,6 -> 8
// // add positive number -> 1,2,6,9
// // total sum -> 1,2,6,9, (18), 5,3,10,4 (22) sum --> (-4)

// // return sum of odd numbers;
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//   // 1) calc add Even number;
//   //   if (numbers[i] > 0 && numbers[i] % 2 === 0) {
//   //     console.log(numbers[i], "test"); // return 2 and 8 which is even
//   //     total += numbers[i];
//   //   }
//   //   check 2 -> calc add positive number
//   //   if (numbers[i] > 0) {
//   //     console.log(numbers[i]);
//   //     total += numbers[i];
//   //   }
//   //   3) calc add odd number:
//   //   if (numbers[i] > 0 && numbers[i] % 2 == 1) {
//   //     console.log(numbers[i]);
//   //     total += numbers[i];
//   //   }
//   total += numbers[i];
// }

// console.log(total, "total");

// /////////////////////////////////////////////////////////////////

// // 2) Takes two input from users and do Addition, subtraction, multiplication operations. With add button, subtraction button and multiplication button. And also check valid input or not, Input numbers should be in between 3-8, and display error message if user enter incorrect numbers.

// let num1 = Number(prompt("Enter a number between 3 to 8"));
// let num2 = Number(prompt("Enter a number between 3 to 8"));

// if (num1 > 2 && num1 < 9 && num2 > 2 && num2 < 9) {
//   let sumBtn = document.getElementById("sum");
//   let multiplyBtn = document.getElementById("mul");
//   let subtractBtn = document.getElementById("sub");

//   sumBtn.addEventListener("click", () => {
//     let total = num1 + num2;
//     alert(`Total sum is ${total}`);
//   });

//   multiplyBtn.addEventListener("click", () => {
//     let total = num1 * num2;
//     alert(`Total sum is ${total}`);
//   });

//   subtractBtn.addEventListener("click", () => {
//     let total = num1 - num2;
//     alert(`Total sum is ${total}`);
//   });
// } else {
//   alert("Incorrect Input");
// }
