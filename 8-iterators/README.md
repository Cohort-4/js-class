```javascript

/**
 * ITERATORS
 * .forEach()
 * .map()
 * .filter()
 * .reduce()
 * .find()
 * .every()
 * .some()
*/

let myFavoriteFoods = ["Amala","Oha", "Rice", "Indomie", "Yam"];

// the loop way
// for (let i = 0; i < myFavoriteFoods.length; i++) {
//   console.log("USING FOR LOOP",myFavoriteFoods[i]);
// }

// const iterateMyFavoriteFood = myFavoriteFoods.forEach((food) =>
//   console.log(`${food} is one of my favorite food`)
// );

const loopFavFood = myFavoriteFoods.forEach((food, index, array) =>{
  console.log(food)
  console.log(index)
  console.log(array)
})


/**
 * .forEach() - array method
 * @param callbackfn — A function that accepts up to 
 * three arguments. forEach calls the callbackfn function 
 * one time for each element in the array.
 * @param thisArg — An object to which the this keyword 
 * can refer in the callbackfn function.
 * If thisArg is omitted, undefined is used as the this value.
 * Performs the specified action for each element in an array.
 */
const favStadia = [
  "Anfield",
  "Camp nou",
  "Emirate",
  "Villa Park",
  "Bernabeu",
];

const iterateFavStadia = favStadia.forEach((stadium) =>
  console.log(`I would love to play at ${stadium}`)
);

/**
 * .map()
 * Calls a defined callback function on each element of an array,
 * and returns a new(updated) array.
 */
const evenNumbers = [2, 4, 6, 8, 10];

const doubleEvenNumbers = evenNumbers.map((even) => even * 2);
console.log(doubleEvenNumbers); // [4, 8, 12, 16, 20]

/**
 * string example
 *
 */
const booksToRead = ["Purple Hibiscus", "Americana", "Things fall apart"];
const addExclamationMark = booksToRead.map((book) =>
  console.log(`${book} is one my best book`)
);

/**
 * another example
 */
const department = ["Physics", "Mathematics", "Chemistry", "Electrical Engineering","Statistics", "Biology"];
const result = department.map(
  (course) => `${course} is one of the courses in my school`
);

console.log(result)
console.table(result)

/**
 * .filter()
 * A function that accepts up to three arguments.
 * The filter method calls the predicate
 * function one time for each element in the array.
 * Returns the elements of an array
 * that meet the condition specified in a callback function.
 */

const classAge = [22, 11, 35, 25, 33, 19, 22];

const filterAge = classAge.filter((age) => age < 33);
console.log(filterAge);

/**
 * .reduce()
 * return single value
 * .reduce() A function that accepts up to four arguments. 
 * The reduce method calls the callbackfn function one 
 * time for each element in the array.
 */
const favNum = [2, 4, 6, 8, 10, 12];

const reduceToSingleNum = favNum.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);

console.log(reduceToSingleNum);

/**
 * string example with .reduce()
 * khalid
 */

const myNames = ["hauwa", "alimi", "london", "indomie", "dodo"];

const myStudent = myNames.reduce((prev, curr) => prev + curr[0], "K");
console.log(myStudent); // Khalid


/**
 *  Example
 */

const num = [2, 7, 8, 9, 11, 12]; // 49
const total = num.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log("total", total);



/**
 * .every()
 * The every() method tests whether all elements in the array pass 
 * the test implemented by the provided function. 
 * It returns a Boolean value.
 * Determines whether all the members of an array satisfy the specified test.
 */


const randomNum = [10, 20, 30, 40, 50, 60, 70];

const checkValue = randomNum.every((num) => console.log(num > 3)) // True


/**
 * .some()
 * The some() method tests whether at least one element in the array passes 
 * the test implemented by the provided function. It returns true if, in the array, 
 * it finds an element for which the provided function returns true; 
 * otherwise it returns false. It doesn't modify the array.
 */

const myFavSportName = ["Tennis", "Badminton", "Cricket", "Football", "Basketball"];

const checkItemLength = myFavSportName.some((sport) => sport.length < 4)
console.log(checkItemLength);


/**
 * .find()
 */



/**
 * .findIndex()
 */


/**
 * Higher order function
 * A higher-order function is a function that either accepts functions 
 * as parameters, returns a function, or both
 */



/**
 * Class/Assignment
 */
const profile = [
  {
    id: 1,
    name: 'jafar',
    age: 52,
    school: 'lasu',
    country: 'nig'
    
  },
  {
    id: 2,
    name: 'alimi',
    age: 15,
    school: 'marusoft',
    country: 'nig'
    
  },
  {
    id: 3,
    name: 'musa',
    age: 20,
    school: 'OOU',
    country: 'nig' 
  }
];
// todo filter by age > 15 name === jafar

const record = [
  {
    id: 1,
    fullname: 'owolabi kehinde',
    department: 'Phlebotomy',
    age: 35,
    address: '10, Adeyete str'
  },
  {
    id: 2,
    fullname: 'Taiye Taiwo',
    department: 'Chemistry',
    age: 25,
    address: '10, Adeyemi str'
  },
  {
    id: 3,
    fullname: 'Nuno Gomez',
    department: 'Anatomy',
    age: 55,
    address: '19, Brown Avenue'
  },
  {
    id: 4,
    fullname: 'Nnamdi Kelvin',
    department: 'Physiology',
    age: 55,
    address: '2, Kelvin Str'
  },
  {
    id: 5,
    fullname: 'Nnamdi Kelvin',
    department: 'Phlebotomy',
    age: 60,
    address: '2, Kelvin Str'
  },
];
// TODO filter record by department === Phlebotomy and age > 25


const cities = ['Lagos', 'Kaduna', 'Nassarawa', 'Anambra', 'Sokoto', 'Maiduguri', 'Cross-River', 'Plateau', 'Zamfara'];

// TODO 1. iterate through the array to get "I have visited the various city"
//  TODO 2. iterate and filter the largest city greater than 6 ( > 6)


```