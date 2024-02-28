/**
 * CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
 * agreeOrDisagree()
 * Write a function, agreeOrDisagree(), that takes in two strings,
 * and returns 'You agree!' if the two strings are the same
 *  and 'You disagree!' if the two strings are different.
 * if (first === second)
 * where first and second are your function's parameters
 */

// === strict equality operator
// == equality operator
// = assignment operator

const agreeOrDisagree = (stringOne, stringTwo) => {
  if (stringOne === stringTwo) {
    return "You agree!";
  } else {
    return "You disagree!";
  }
};
console.log(agreeOrDisagree("hellom", "hello"));

// const agreeOrDisagree = (str1, str2) => {
//   if (str1 === str2) {
//     return "You agree!";
//   } else {
//     return "You disagree!";
//   }
// };
// console.log(agreeOrDisagree("hello khalid", "hello marusoft")); // You disagree!
// console.log(agreeOrDisagree("hello", "hello")); // You agree!

// const agreeOrDisagree = (string1, string2) => {
//   if (string1 === string2) {
//     console.log("You agree!");
//   } else {
//     console.log("You disagree!");
//   }
// };
// agreeOrDisagree("uudddgdgdgdgdgddg", "jsjjahsxgxdd")
// agreeOrDisagree("uuddd", "uuddd");
