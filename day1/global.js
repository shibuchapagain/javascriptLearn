// --> OBJECT:

// const person = {
//   // key --> value:
//   firstName: "js",
//   lastName: "javascript", // string
//   age: 27, // number
//   skills: ["Javascript", "Nodejs"],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//     // console.log(this);
//   },
// };

// console.log(person.firstName); // first method:
// console.log(person["lastName"]); // object access ->

// console.log(person.getFullName());

// console.log(person);
// let data = person.skills;
// console.log(data[0]);

// console.log(person.getFullName());

// console.log(this); // --> window object:

/////////////////////////////// -->
// const person = {
//   firstName: "js",
//   age: 23,
// };
// // const person2 = { ...person }; // --> es5 / es6
// // console.log(person2);
// // person2.firstName = "javascript";
// // console.log(person2, "test1"); // {firstN}
// // console.log(person, "test2"); //

// const personCopy = Object.assign({}, person); // es6 ...person;
// // console.log(personCopy);

// person.firstName = "javascript";

// console.log(person); // es6 ... -->
// console.log(personCopy); //

//////////////////////////////////////////////////////////////////////

// MONGODB --> NODE ():

const Auth = [
  {
    _id: "45yu", // primary key -->
    email: "shibu@gmail.com",
    password: 1122,
    isLoggedIn: true,
  },
  {
    _id: "2233uu",
    email: "random@gmail.com",
    password: 1122,
    isLoggedIn: false,
  },
  {
    _id: "45y33", // primary key -->
    email: "blabla@gmail.com",
    password: 1122,
    isLoggedIn: true,
  },
];

// ARRAY -> find(), map(), filter(), forEach() -->
