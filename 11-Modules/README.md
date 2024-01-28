```javascript

/**
 * Modules in JavaScript are reusable pieces of code that 
 * can be exported from one program and imported for use 
 * in another program.
 * Modules are particularly useful for a number of reasons. 
 * By separating code with similar logic into files called modules, we can:
 * find, fix, and debug code more easily;
 * reuse and recycle defined logic in different parts of our application;
 * module.exports exports the module for use in another program.
 * require() imports the module for use in the current program.
 */

/**
 * require() function
 * require() is a JavaScript function that enables a module 
 * to load by passing in the module's filepath as a parameter
 * example of filepath passed a parameter is "./post.js"
**/


/**
 * module.exports
 * module.exports exposes the current module as an object.
**/

/**
 * ES6 (ES2015) introduced a more flexible, easier syntax to export modules:
 * 1. default exports use export default to export JavaScript objects, 
 * functions, and primitive data types.
 * 2. 'named exports' use the 'export' keyword to export data in variables.
 * 3. 'named exports' can be aliased with the 'as' keyword.
 * 4. 'import' is a keyword that imports any object, function, or data type.
 */

/** Package.json is file that 
 * manage project dependencies
 * To generate package.json
 * we run `npm init -y` or `npm init` to skip some questions 
 * then add "type": "module" in our package.json file
 * in order to be able to use es6 syntax modules like 'import'
 * Two types of dependencies
 * 1. dependencies
 * 2. Devdependencies
 */

/**
 * To install npm packages
 * we run `npm install packageName`
 * for example to install `nodemon`
 * npm install nodemon
 * nodemon is a tool that helps develop 
 * Node.js based applications by automatically 
 * restarting the node application when 
 * file changes in the directory are detected.
 */

/**
 * To start our app,
 * run `npm start`
 */


/**
 * Named Imports
 * To import objects stored in a variable, we use the
 * 'import' keyword and include the variables in a set of braces {}.
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
 * Export 'as'
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
import {myVarible, add, substract, division}


 ArithmeticOperation.myVarible;
 ArithmeticOperation.substract();
 ArithmeticOperation.add();
/**
 * Combining Export Statements
 * We can also use named exports and default exports together.
 * illustration
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


```