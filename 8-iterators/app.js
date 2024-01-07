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
/**
 * Example 1
 * .forEach()
 */
const favoriteCars = ["Toyota Corolla", "Datsun", "BMW", "Mercedes Benz"];

const iterateMyFavoriteCars = favoriteCars.forEach((car) => {
  console.log(`${car} is one our favorite cars`);
});

/**
 * Example 2
 * .forEach()
 */
const favStadia = ["Anfield", "Camp nou", "Emirate", "Villa Park", "Bernabeu"];

const iterateFavStadia = favStadia.forEach((stadium) =>
  console.log(`I would love to play at ${stadium}`)
);

/**
 * Example 3
 * .map()
 * loop and mutate
 */

const oddNumbers = [1, 3, 5, 7, 9, 11, 13];
const tripleOddNumbers = oddNumbers.map((oddNumber) => oddNumber * 3);
console.log(tripleOddNumbers);

/**
 * Example 4
 */

const department = [
  "Physics",
  "Mathematics",
  "Chemistry",
  "Electrical Engineering",
  "Statistics",
  "Biology",
];

const result = department.map(
  (course) => `${course} is one of the courses in my school`
);

console.log(result);
console.table(result);

/**
 * Example 5
 * .filter()
 * Returns the elements of an array that meet the
 * condition specified in a callback function.
 */

const getDepartmentCharacterGreaterThanSeven = department.filter(
  (course) => course.length > 7
);
console.log(
  "getDepartmentCharacterGreaterThanSeven",
  getDepartmentCharacterGreaterThanSeven
);

const studentAge = [25, 30, 50, 80, 96, 88, 11];
let studentAgeGreaterThanEighty = studentAge.filter((age) => age > 80);
console.log("studentAgeGreaterThanEighty ", studentAgeGreaterThanEighty);

/**
 * Example 5
 * .reduce()
 * previousValue: number, currentValue
 */

const frequency = [5, 7, 9, 11, 13, 15]; // 60

const sumFrequency = frequency.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log("sumFrequency", sumFrequency);

/**
 * .every()
 * The every() method tests whether all elements in the array pass
 * the test implemented by the provided function.
 * It returns a Boolean value.
 * Determines whether all the members of an array satisfy the specified test.
 */

const randomNum = [10, 20, 30, 40, 50, 60, 70];

const checkValue = randomNum.every((num) => num > 3); // True
console.log("checkValue", checkValue); // True

const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
const checkEvenNumberValue = evenNumbers.every((even) => even < 0);
console.log("checkEvenNumberValue", checkEvenNumberValue);

/**
 * .some()
 * The some() method tests whether at least one element in the array passes
 * the test implemented by the provided function. It returns true if, in the array,
 * it finds an element for which the provided function returns true;
 * otherwise it returns false. It doesn't modify the array.
 */

const myFavSportName = [
  "Tennis",
  "Badminton",
  "Cricket",
  "Football",
  "Basketball",
];

const checkItemLength = myFavSportName.some((sport) => sport.length < 4);
console.log("checkItemLength", checkItemLength);

/**
 * .find()
 * The find() method of Array instances returns the first element
 * in the provided array that satisfies the provided testing function.
 * If no values satisfy the testing function, undefined is returned.
 */
const mathTopics = ["calculus", "statistics", "permutation", "probablity"];
const findTopicsLengthGreater = mathTopics.find((topic) => topic.length > 10);
console.log("findTopicsLengthGreater", findTopicsLengthGreater);

/**
 * .findIndex()
 * The findIndex() method of Array instances returns the index of the
 * first element in an array that satisfies the provided testing function.
 * If no elements satisfy the testing function, -1 is returned.
 */
const newCohortStudentAge = [18, 45, 22, 36, 35, 28, 30];

const olderStudent = newCohortStudentAge.findIndex((age) => age > 36);
console.log("olderStudent", olderStudent);

/**
 * Higher order function
 * A higher-order function is a function that either accepts functions
 * as parameters, returns a function, or both
 */

// const addNumbers = (a, b) => a + b;
// console.log(addNumbers(2, 5));

// const anotherAddNum = (x, y, z) => {
//   return x + y + z;
// };
// console.log(anotherAddNum(3, 4, 7));

// Example of higher order function

/**
 * Class/Assignment
 */
const profile = [
  {
    id: 1,
    name: "jafar",
    age: 52,
    school: "lasu",
    country: "nig",
  },
  {
    id: 2,
    name: "alimi",
    age: 15,
    school: "marusoft",
    country: "nig",
  },
  {
    id: 3,
    name: "musa",
    age: 20,
    school: "OOU",
    country: "nig",
  },
];
// todo filter by age > 15 and name === musa

const solution = profile.filter((person) => person.age > 15 && person.name === "musa");
console.log('solution', solution)

const record = [
  {
    id: 1,
    fullname: "owolabi kehinde",
    department: "Phlebotomy",
    age: 35,
    address: "10, Adeyete str",
  },
  {
    id: 2,
    fullname: "Taiye Taiwo",
    department: "Chemistry",
    age: 25,
    address: "10, Adeyemi str",
  },
  {
    id: 3,
    fullname: "Nuno Gomez",
    department: "Anatomy",
    age: 55,
    address: "19, Brown Avenue",
  },
  {
    id: 4,
    fullname: "Nnamdi Kelvin",
    department: "Physiology",
    age: 55,
    address: "2, Kelvin Str",
  },
  {
    id: 5,
    fullname: "Nnamdi Kelvin",
    department: "Phlebotomy",
    age: 60,
    address: "2, Kelvin Str",
  },
];
// TODO filter record by department === Phlebotomy and age > 25

const cities = [
  "Lagos",
  "Kaduna",
  "Nassarawa",
  "Anambra",
  "Sokoto",
  "Maiduguri",
  "Cross-River",
  "Plateau",
  "Zamfara",
];

// TODO 1. iterate through the array to get "I have visited the various city"
//  TODO 2. iterate and filter the largest city greater than 6 ( > 6)
