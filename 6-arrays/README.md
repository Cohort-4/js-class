```javascript

/**
 * Array
 * Array = collection of list of items.
 * denoted with square brackect []
 * each item in an array is separated with comma.
 * with same data types or different data types
 * Each item inside of an array is at a numbered position, or index, starting at 0.
 */

const myWishList = [
  "get a car",
  "buy some food",
  "buy a land",
  "rent an apartment",
];
console.log(myWishList);

const myRandomList = [1, true, "hello world", "444"];

/**
 * How to access item in an array
 * array[index number]
 */

const getThirdItem = myWishList[2];
console.log("getThirdItem =", getThirdItem);

/**
 * How to modify/update an item inside an array
 * myArray[index to modify] = new value
 */
myWishList[1] = "get a business";
console.log(myWishList);

/**
 * Example
 */


const listOfFood = ["Rice", "Bean", "Fufu", "Eba", "Dodo", "Jollof Rice", "Salad"];

listOfFood[6] = "Ofuloju";
listOfFood[1] = "Egbo";
console.log(listOfFood);


const aquaticAnimals = [
  "tilapia",
  "titus",
  "Octopus",
  "StarFish",
  "ElectricFish",
  "Shark",
  "Frog"
];

aquaticAnimals[6] = "Seahorses";
console.log(aquaticAnimals);



// ===== Array methods ============

/**
 * Get the number of items in an array
 * .length
 */

let getNumberOfItem = myWishList.length;
console.log("getNumberOfItem =", getNumberOfItem);

/**
 * .push() add new item into an array
 * Appends new elements to the end of an array,
 * and returns the new length of the array.
 * @param items — New elements to add to the array.
 */
const myFavoriteCourse = [
  "Quantum Mechanics",
  "Modern Physics",
  "Space Physics",
];

const addNewCourse = myFavoriteCourse.push("Wave and Vibration");
console.log(myFavoriteCourse);

/**
 * .pop() remove an item in an array
 * Removes the last element from an array
 * and returns it.
 */

const removeLastCourse = myFavoriteCourse.pop();
console.log("removeLastCourse =", removeLastCourse);
console.log(myFavoriteCourse);

/**
 * .shift()
 * Removes the first element from an array and returns it.
 * If the array is empty, undefined is returned and the array is not modified.
 */
const removedFirstItem = myFavoriteCourse.shift();
console.log(myFavoriteCourse);

/**
 * .unshift()
 * Inserts new elements at the start of an array,
 * and returns the new length of the array.
 * @param items — Elements to insert at the start of the array.
 */
myFavoriteCourse.unshift("Electrodynamics");
console.log(myFavoriteCourse);

/**
 * .slice()
 * Returns a copy of a section of an array.
 * For both start and end, a negative index can be used to indicate
 * an offset from the end of the array.
 * For example, -2 refers to the second to last
 * element of the array.
 */

const myFavoritePlace = ["Lagos", "Ogun", "Jigawa", "Osun", "Oyo"];
console.log(myFavoritePlace.slice(1, 3)); // [ 'Ogun', 'Jigawa' ]
console.log(myFavoritePlace.slice(1, 4)); // [ 'Ogun', 'Jigawa', 'Osun' ]
console.log(myFavoritePlace.slice(-1)); // [ 'Oyo' ]
console.log(myFavoritePlace.slice(-2)); // [ 'Osun', 'Oyo' ]

/**
 * .split()
 * Split a string into substrings using
 * the specified separator and return them as an array.
 * @param separator — A string that identifies character
 * or characters to use in separating the string.
 * If omitted, a single-element array containing the entire string is returned.
 * @param limit — A value used to limit the number of elements
 * returned in the array.
 */

const itemToSplit = "marusoft academy";
console.log(itemToSplit.split()); // ["marusoft academy"];

const itemWithSeparatorToSplit = "marusoft academy";
console.log(itemWithSeparatorToSplit.split(""));
// [ "m", "a", "r", "u", "s", "o", "f", "t",  " ", "a", "c", "a", "d", "e", "m", "y",];

/**
 * .join()
 * Adds all the elements of an array into a string,
 * separated by the specified separator string.
 * @param separator — A string used to separate one element
 * of the array from the next in the resulting string.
 * If omitted, the array elements are separated with a comma.
 */

const elementsToJoin = ["a", "w", "e", "s", "o", "m", "e"];
console.log("elementsToJoinWithoutSeparator=", elementsToJoin.join()); // a,w,e,s,o,m,e
console.log("elementsToJoinWithSeparator=", elementsToJoin.join("")); // awesome

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
];
console.log(myTraineeList.includes("taiwo", 0)); // false
console.log(myTraineeList.includes("hamzah", 2)); // true
console.log(myTraineeList.includes("Khalid".toLowerCase(), 0)); // true

/**
 * .includes()
 * Array interception
 * Another example
 * finding the common element 
 * between two arrays
 */


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
console.log(countries.splice(0, 2)); // [ 'Nigeria', 'Togo' ] elements deleted.


/**
 * .sort()
 */
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

/**
 * Nested Array
 * an array that contains another array
 * is known as a nested array.
 */
const favoriteDoubleNumber = [
  [1, 0],
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

const accessLastItemOfThirdElement = favoriteDoubleNumber[3][1];
console.log(accessLastItemOfThirdElement); // 4

const twoWordEach = [
  ["alimi", "kehinde"],
  ["animashaun", "khalid"],
  ["Liammed", "Jafar"],
];
const getKhalid = twoWordEach[1][1];
console.log(getKhalid);


```