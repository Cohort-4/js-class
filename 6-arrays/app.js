/**
 * Illustration on array
 */
const fullStacKStudents = [
  "Kehinde",
  "Aliyah",
  "Al-alamin",
  "Ibrahim",
  "Alimi",
  "Oluwaseye",
  "Kazeem",
  "Yusuf",
];

/**
 * Accessing items inside array
 * nameOfArray[index-number]
 */

const getFourthItem = fullStacKStudents[3];
console.log(getFourthItem);

const getLastItem = fullStacKStudents[5];
console.log(getLastItem);

/**
 * Update an array
 * nameOfArray[index to be modified] = new value
 */
let updateFullStackList = (fullStacKStudents[3] = "Muhammed");

console.log("fullStacKStudents", fullStacKStudents);

/**
 * Methods in an Array
 * .length
 */

let getNumberOfItemsInClass = fullStacKStudents.length;
console.log("getNumberOfItemsInClass = ", getNumberOfItemsInClass);

/**
 * Methods in an Array
 * .push()
 */

const addNewStudent = fullStacKStudents.push("Adenike");
console.log(fullStacKStudents);

/**
 * Methods in an Array
 * .pop()
 */
let removeLastStudent = fullStacKStudents.pop();
console.log(fullStacKStudents);

/**
 * Methods in an Array
 * .shift()
 */
let removeFirstStudent = fullStacKStudents.shift();
console.log(fullStacKStudents);
/**
 * Methods in an Array
 * .unshift()
 */
let insertNewStudentAtTheStart = fullStacKStudents.unshift("Zainab");
console.log(fullStacKStudents);

/**
 * Methods in an Array
 * .slice()
 */
const myFavoriteFood = ["Oha", "Bean", "Rice", "Amala", "Yam"];

const sliceMyFavoriteFood = myFavoriteFood.slice(1, 3);
console.log("sliceMyFavoriteFood", sliceMyFavoriteFood);

/**
 * Methods in an Array
 * .split()
 * Split a string into substrings using the specified separator
 * and return them as an array.
 * @param separator — A string that identifies character or characters
 * to use in separating the string. If omitted, a single-element array
 * containing the entire string is returned.
 */

let myName = "omokehinde";
let splitMyName = myName.split("");

console.log("splitMyName = ", splitMyName);

let splitMyNameAgain = myName.split("");
console.log("splitMyNameAgain = ", splitMyNameAgain);

/**
 * Methods in an Array
 * .join()
 * Adds all the elements of an array into a string, separated by the specified separator string.
 * @param separator — A string used to separate one element of the
 * array from the next in the resulting string.
 * If omitted, the array elements are separated with a comma.
 */
let joinMyName = splitMyNameAgain.join();
console.log("joinMyName = ", joinMyName);

/**
 * .reverse()
 * Reverses the elements in an array in place.
 * This method mutates the array and returns
 * a reference to the same array.
 */

const itemToReversed = ["a", "w", "e", "s", "o", "m", "e"];
console.log(itemToReversed.reverse()); // ["e", "m", "o", "s", "e", "w", "a"];

/**
 * .includes()
 * Determines whether an array includes a certain element,
 * returning true or false as appropriate.
 * @param searchElement — The element to search for.
 * @param fromIndex — The position in this array at which
 * to begin searching for searchElement.
 */
const myTraineeList = [
  "alimi",
  "mubarak",
  "muhammed",
  "hamzah",
  "abdulAfeez",
  "khalid",
  "kehinde",
  "ibrahim",
  "aliyah",
  "taiwo",
];
console.log(myTraineeList.includes("idowu", 0)); // false
console.log(myTraineeList.includes("taiwo", 2)); // true
console.log(myTraineeList.includes("Khalid".toLowerCase(), 0)); // true

/**
 * .splice()
 * Removes elements from an array and,
 * if necessary, inserts new elements in their
 * place, returning the deleted elements.
 * @param start — The zero-based location in
 * the array from which to start removing elements.
 * @param deleteCount — The number of elements to remove.
 * @returns — An array containing the elements
 * that were deleted.
 */

const countries = ["Nigeria", "Togo", "Ghana", "Chad", "Tunsia", "Haiti"];
console.log("countriesResult", countries.splice(0, 3)); // [ 'Nigeria', 'Togo', 'Ghana ] elements deleted.
console.log("countries ", countries);

/**
 * .sort()
 * Sorts an array in place. This method mutates the array a
 * nd returns a reference to the same array.
 * @param compareFn Function used to determine the order of the elements.
 * It is expected to return a negative value if the first argument
 * is less than the second argument, zero if they're equal,
 * and a positive value otherwise. If omitted, the elements
 * are sorted in ascending, ASCII character order.
 */
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const myFavoriteNumbers = [1, 5, 8, 6, 2, 10, 11, 4, 12, 7, 3, 9];
console.log(myFavoriteNumbers.sort((a, b) => a - b)); // in ascending order
console.log(myFavoriteNumbers.sort((a, b) => b - a)); // in descending order

/**
 * Nested Array
 * an array that contains another array
 * is known as a nested array.
 */
const favoriteDoubleNumber = [
  [1, 0], // index 0
  [1, 2],
  [2, 3],
  [3, 4],
];

/**
 * Items/Elements can be accessed in a nested array using bracket notation
 * specifying the index value. For example to access the various items
 * in the nested array "favoriteDoubleNumber", we can achieve that as follows
 */
const firstItem = favoriteDoubleNumber[0]; // [1, 0]
console.log(firstItem);
const secondItem = favoriteDoubleNumber[1]; // [1, 2]
console.log(secondItem);

// To accessed the last item in the third element

const accessLastItemOfFourthElement = favoriteDoubleNumber[3][1];
console.log(accessLastItemOfFourthElement); // 4

/**
 * Another questions
 */
const twoWordEach = [
  ["alimi", "kehinde"],
  ["animashaun", "khalid"],
  ["Liammed", "Jafar"],
];
const getKhalid = twoWordEach[1][1];
console.log(getKhalid);

/**
 * Convert string to array
 *
 */

const names = ["hello", "tolu", "mide"];
const str = names.toString();
console.log(str);

console.log(typeof str);

/**
 * array to string
 */
const arr = str.split(",");
console.log(arr);

const joined = arr.join();
console.log(joined);

console.log(names.join(""));
console.log(names.join("-"));
console.log(names.join(" "));
console.log(names.join(", "));

/**
 * typeof operator
 * Determines a variable data type
 */

/**
 *
 */
const output = "What's your first line of code"
  .split("")
  .map(parseInt)
  .filter((a) => a)
  .reduce((a, b) => a + b)
  .toString()
  .split("")
  .reverse()
  .join("");
console.log("OUTPUT", output);
