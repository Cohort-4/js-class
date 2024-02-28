/**
 * The most common minimum age to vote is 18. Write a
 * function canIVote() that takes in a number,
 * representing the person's age, and returns the
 * boolean true if they are 18 years old or older, and
 * the boolean false if they are not.
 * You might find a condition like this useful:
 * if (age >= 18)
 */

// const canIVote = (age) => {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// };
// let requiredAge = canIVote(10);
// console.log(requiredAge);

// solution
const ICanVote = (age) => {
  if (age >= 18) {
    // console.log("I can vote");
    return true;
  } else {
    // console.log("I cannot vote");
    return false;
  }
};
// ICanVote(21);
console.log(ICanVote(12));





// const canIVote = (age) => {
//   if (age >= 18) {
//     console.log("You are eligible to vote")
//   }
//   else{
//     console.log("You are not eligible to vote");
//   }
// };
// canIVote(15)
