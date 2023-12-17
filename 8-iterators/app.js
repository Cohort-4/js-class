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
 * Create an array of your friend using .map()
 * as the iterator and return a `Hello ${myFriendName}!`
 */