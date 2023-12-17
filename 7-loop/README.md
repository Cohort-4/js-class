```javascript

// ======== LOOPS =======

/**
 * Loop allows a block of code to be repeated indefinitely or
 * executing blocks of code multiple times.
 * 1. for loop
 * 2. while loop
 * 3. do loop
 */

/**
 * for loop is used when the destination(stopping conditional)
 * is known ahead
 */

const array = ["item1", "item2", "item3"];
for (let i = 0; i < array.length; i++) {
  // code logic
}

/**
 * printing 1 - 10 manually
 */
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
 * printing items in an array manually
 */

let myFavoritePlaceToLive = ["Nigeria", "Qatar", "Saudi Arabia", "Ghana"];
console.log(myFavoritePlaceToLive[0]);
console.log(myFavoritePlaceToLive[1]);
console.log(myFavoritePlaceToLive[2]);
console.log(myFavoritePlaceToLive[3]);

/**
 * Counting with For Loop
 * 1 - 10
 */

for (let i = 1; i < 11; i++) {
  console.log("counting 1 - 10 with for loop", i);
}
/**
 * Counting backward
 * for example 4, 3, 2, 1
 */

for (let i = 4; i >= 1; i--) {
  console.log("counting backward", i);
}

/**
 *  illustration on iterating over an array
 */
const favPlacesToVisit = [
  "Ghana",
  "Dubai",
  "England",
  "Lagos",
  "Togo",
  "Egypt",
];

for (let i = 0; i < favPlacesToVisit.length; i++) {
  console.log(`I will love to visit ${favPlacesToVisit[i]}`);
}


/**
 * Nested Loop: for loop inside a for loop
 */

const array1 = ["some items1"];
const array2 = ["some items2"];


// outer for loop
for (let index = 0; index < array1.length; index++) {
  // inner for loop
  for (let index = 0; index < array2.length; index++) {
    //logic to perform
  }
}

// outer for loop
for (let i = 0; i < array.length; i++) {
  //inner for loop
  for (let j = 0; j < array.length; j++) {}
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

```