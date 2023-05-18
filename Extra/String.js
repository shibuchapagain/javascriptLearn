// const string1 = "javascript is popular language";
// console.log(string1);

//[TYPE CONVERSION: STRING --> NUMBER, NUMBER -> STRING, --> STRING --> BOOLEAN, NUMBER --> BOOLEAN, OBJECT --> ARRAY]

// const string2 = new String("Javascript is popular"); // object -->
// console.log(string2);

// let fullName = "javascript";

// let fullName= "shiva chapagain";
// SHIVA CHAPAGAIN, Shiva Chapagain, // Mr. Shiva Chapagain, M. Shiva chapagain

// LENGTH:
// let names = " ";
// names?.length ? console.log("data received success") : console.log("failure");

// let person = {
//   name: "js",
//   age: 23,
// };

// console.log(person?.address); // return address, undefined --> address can't be find() --> error.
// console.log(test?.address);

// console.log(person.address);

// length --> string --> total word -->
// console.log(names.length); // index -> 0 length -> 1.
// console.log(names.length); // 6 -> count space as well
// console.log(string1.length);

// at();
// const fullName = "js";
// console.log(fullName.at(0)); // at looks index and return -> value: --> array at(), at()
// console.log(fullName.at(-2)); // return last index value.

// const lastName = " script"; // 1 space.
// console.log(fullName.concat(lastName)); // join two string.

// GMAIL --> TEST@gmail.com -->  test@gmail.com

// let fullName = "Jack@gmail.com";
// console.log(fullName.toLowerCase());
// console.log(fullName.split(" ")[0].toUpperCase());
// console.log(fullName.toUpperCase());

// SPLIT:
// console.log(string1.split(" ")); // [ 'javascript', 'is', 'popular', 'language' ], convert string to array:

// slice function:
// const number = "98640044";

const firstName = "javascript";

// -->
// Javascript --> problem --> split("")

// --> 1) firstName --> 0 --> at(); --> j
// 2)

// console.log(firstName.split("")[0])
// let firstWord = firstName.split("")[0].toUpperCase();
// console.log(firstWord, "tets"); // j
// const remainingPart = firstName.slice(1);
// console.log(remainingPart, "2");
// const output = firstWord.concat(remainingPart);
// console.log(output, "result");

// console.log(firstName.slice(1));
// console.log(number.slice(2)); // remove first 2 number
// console.log(firstName.slice(-4)); // return last 4 digit only

///

// --> 111110000333888 --> ************888;

// padStart
// const AccountNumber = "2034399002125581";
// const last4Digits = AccountNumber.slice(-3);
// console.log(last4Digits); // 581
// const output = last4Digits.padStart(AccountNumber.length, "#");
// console.log(output);

// console.log("9864".padStart(10, "*"));
// console.log("9864".padEnd(10, "*"));

/// slice:
// const str = "javascript language";
// console.log(str.slice(1, 4)); // JA

//
// let number = 9855 + "";
// console.log(number, typeof number);
// console.log(number.toString());

// toUpperCase
// const names = "javascript";
// console.log(names.toUpperCase());

// let fullName = "shiva"; // string --> lastName

// trim
// const names = "java script hello boys";
// console.log(names.trim());

// const names2 = "   shibuchapagain   ";
// console.log(names2);
// console.log(names2.trim());

// check trimStart(), trimEnd();

// 1) form validation --> phone -> string (phone types)
// 2)  10 alert("out of stock") add more minus
// fullName= "sva";

// let fullName = "  email.com  ";
// console.log(fullName.trim());

// let names = " ";
// names.trim()?.length ? console.log(true) : console.log(false);
