/**
 * Named Imports
 * To import objects stored in a variable, we use the
 * import keyword and include the variables in a set of {}.
 */

/**
 * Export Named Exports
 * Named exports are also distinct in that they can
 * be exported as soon as they are declared, by placing
 * the keyword 'export' in front of variable declarations
 * illustration
 * export const myNumber = 15
 */

/**
 * Export as
 * Named exports also conveniently offer a way to
 * change the name of variables when we export or import
 * them. We can do this with the 'as' keyword.
 */

let someVarible = "";
const addition = (x, y) => {};
const substration = (x, y) => {};
const division = (a, b) => {};

export {
  someVarible as myVarible,
  addition as add,
  substration as substract,
  division,
};

/**
 * Import as
 * To import named export aliases with the 'as' keyword,
 * we add the aliased variable in our import statement
 * import {myVarible, add, substract} from "filepath"
 * Another way of using aliases is to import
 * the entire module as an alias:
 * import * as ArithmeticOperation from "filepath"
 * ArithmeticOperation.myVarible;
 * ArithmeticOperation.substract();
 * ArithmeticOperation.add();
 */

/**
 * Combining Export Statements
 * We can also use named exports and default exports together.
 * illustration
 *
 */
export const addTwoNumbers = (s, t) => {};
export const substractTwoNumbers = (m, n) => {};

function multiplyTwoNumbers(p, q) {}

export default multiplyTwoNumbers;

/**
 * Combining Import Statements
 * We can import the collection of objects and
 * functions with the same data.
 */

import { addTwoNumbers, substractTwoNumbers } from "filepath";
import multiplyTwoNumbers from "filepath";

// import {
//   availableTutors,
//   numberOfTutorRequired,
//   meetBootCampRequirement,
// } from "./note-3";

// const displayTutorCapacity = () => {
//  availableTutors.forEach((tutor) => {
//    console.log(`The Capacity of ${tutor["First Name"]} : ${tutor["Years of Experience"]}`);
//  });
// };
// displayTutorCapacity();

// const displayStaffStatus = () => {
//   availableTutors.forEach((teacher) => {
//     console.log(
//       teacher["First Name"] +
//         " meets BootCamp requirements: " +
//         meetBootCampRequirement(
//           teacher.availableStaff,
//           numberOfTutorRequired.requiredStaff
//         )
//     );
//   });
// };

// displayStaffStatus();
