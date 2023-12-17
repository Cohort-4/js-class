/**
 * Example 1
 * printing 1 - 10 manually
 */
console.log("Counting manually 1 - 10");
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

/**
 * Example 2
 * using "for loop"
 * countig 1 - 10 using "for loop"
 */

for (let i = 1; i <= 10; i++) {
  console.log("using for loop to count 1 - 10", i);
}

/**
 * Example 3
 * Looping through an array
 */

const myFavoriteFood = ["Oha", "Amala", "Bean", "Yam", "Rice"];

for (let i = 0; i < myFavoriteFood.length; i++) {
  console.log(`${myFavoriteFood[i]} is one of my favorite food `);
}

/**
 * Class Activity 1
 * Create a simple of your favorite place
 * and use for loop to loop through that array
 */

let placeILoveToStay = ["Bauchi", "Ondo", "Oyo", "Ogun", "Calabar", "Ilorin"];

for (let i = 0; i < placeILoveToStay.length; i++) {
  console.log(
    `${placeILoveToStay[i]} is on of the place I love to visit and enjoy with friends`
  );
}

/**
 * Example 4
 * Counting Numbers backward
 * 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
 */
for (let i = 10; i >= 1; i--) {
  console.log(i)
}

/**
 * Multiplication Table
 * 1 x 2 = 2
 * 2 x 2 = 4
 * 3 x 2 = 6
 */

const myFirstMultiplier = [2, 3, 4, 5];
const mySecondMultiplier = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < myFirstMultiplier.length; i++) {
  for (let j = 0; j < mySecondMultiplier.length; j++) {
    const answer = myFirstMultiplier[i] * mySecondMultiplier[j];
    // console.log(answer)
    console.log(
      `${myFirstMultiplier[i]} * ${mySecondMultiplier[j]} = ${answer}`
    );
  }
}

/**
 * Create a Multiplication table
 * from 1 - 12 using "for loop"
 */
