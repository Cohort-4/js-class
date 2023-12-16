/**
 * Control flow
 * if else
 * if elseif else
 * Switch syntax
 * Tenary Operator
 */

// if (condition) {
//   // the code inside the first block will run
// } else {
//   // the code inside the second block will run
// }


// Example 1
if (true) {
  console.log("I am learning control flow in js");
} else {
  console.log("I am not learning control in js");
}

// Example 2

let isRaining = true;

if (isRaining) {
  console.log("Stay at Home");
} else {
  console.log("Go to School");
}

// Example 3

const schoolName = "Marusoft Academy";

if (schoolName.length % 2 == 0) {
  console.log("This is real name of the school");
} else {
  console.log("This is not the real name of the school");
}

// Example 4

let myFavoriteFood = "Vegetable, Oha and Garri";

if (myFavoriteFood.length >= 20) {
  console.log("This is my favorite food");
} else {
  console.log("This is not my favorite food");
}

// Example 5

/**
 * if and else if and else statement
 */

const myNewCourse = "Data Science";
const totalLength = myNewCourse.length;
console.log("totalLength =", totalLength);

if (totalLength % 3 !== 0) {
  console.log("This is my new course to learn");
} else if (totalLength % 3 == 0) {
  console.log("This is just the normal divison");
} else {
  console.log("There is no idea");
}

/**
 * Example 6
 * compare value with control flow
 */

let myHomeAddress = "Airport Road, Lagos";
let myWorkAddress = "Yaba, phase One, Lagos";
const homeLength = myHomeAddress.length;
const workLength = myWorkAddress.length;
console.log("homeLength", homeLength);
console.log("workLength", workLength);

if (homeLength && workLength === 21) {
  console.log("hello");
} else {
  console.log("Dont say Hello");
}

if (homeLength || workLength >= 21) {
  console.log("hello");
} else {
  console.log("Dont say Hello");
}

/**
 * Example 7
 * switch statement
 */

switch (3) {
  case 1:
    console.log("hello switch");
    break;
  case 2:
    console.log("hi switch");

    break;
  case 3:
    console.log("Ekaro switch");

    break;
  case 4:
    console.log("Good morning switch");

    break;

  default:
    console.log("I am the default case");
    break;
}

/**
 * Example 8
 * switch statement
 */

const randomNumber = Math.random() * 10;
const roundUp = Math.floor(randomNumber);
console.log("randomNumber", randomNumber);
console.log("roundUp", roundUp);

switch (roundUp) {
  case 0:
    console.log("This is number 0");
    break;
  case 1:
    console.log("This is number 1");
    break;
  case 2:
    console.log("This is number 2");
    break;
  case 3:
    console.log("This is number 3");
    break;
  case 4:
    console.log("This is number 4");
    break;
  case 5:
    console.log("This is number 5");
    break;
  case 6:
    console.log("This is number 6");
    break;
  case 7:
    console.log("This is number 7");
    break;
  case 8:
    console.log("This is number 8");
    break;
  case 9:
    console.log("This is number 9");
    break;

  default:
    console.log("There is no real number");
    break;
}

/**
 * Example 9
 * switch statement
 */
const time = new Date();
console.log("time", time);

const month = new Date().getMonth();
console.log("month", month);

const today = new Date().getDay();
console.log("today", today);

const getYear = new Date().getFullYear();

console.log("getYear", getYear);

/**
 * Example 10
 * switch statement
 */
const diceFace = Math.random() * 6 + 1;
const roundUpDiceFace = Math.floor(diceFace);
console.log("diceFace", diceFace);
console.log("roundUpDiceFace", roundUpDiceFace);

switch (roundUpDiceFace) {
  case 1:
    console.log(`This is dice face ${roundUpDiceFace}`);
    break;
  case 2:
    console.log(`This is dice face ${roundUpDiceFace}`);
    break;
  case 3:
    console.log(`This is dice face ${roundUpDiceFace}`);
    break;
  case 4:
    console.log(`This is dice face ${roundUpDiceFace}`);
    break;
  case 5:
    console.log(`This is dice face ${roundUpDiceFace}`);
    break;
  case 6:
    console.log(`This is dice face ${roundUpDiceFace}`);
    break;

  default:
    console.log("There is no  dice face");
    break;
}

/**
 * Ternary Operator
 */
condition ? "do something" : "do another thing";

// condition? console.log("hello ternary") : console.log("dont bother to say hello")

const isUserLoggedIn = false;
isUserLoggedIn
  ? console.log("you can see the dashbaord")
  : console.log("You cannot see the dashboard");
