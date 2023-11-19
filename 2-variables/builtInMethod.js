// toUpperCase() method
const mySchoolName = "Marusoft Academy";
const mySchoolNameAllCapitalized = mySchoolName.toUpperCase();
console.log(mySchoolNameAllCapitalized);

// toLowerCase() method
let favoriteSportTeam = "LIVERPOOL";
let convertfavoriteSportTeamCharaterToLower = favoriteSportTeam.toLowerCase();
console.log(convertfavoriteSportTeamCharaterToLower);

// .length method return the number character in a string
let mySchoolCharacterNumber = mySchoolName.length;
console.log(mySchoolCharacterNumber);

// Alimi Kehinde
const myFirstName = "Kehinde";
const myLastName = "Alimi";
const myFullName = `${myFirstName}. ${myLastName[0]}`;
console.log("myFullName =", myFullName);

// Math Method in JS
// Math.random() returns a pseudorandom number between 0 and 1 exclusive
let randomNumbersBetweenZerosAndOne = Math.random();
console.log("randomNumbersBetweenZerosAndOne", randomNumbersBetweenZerosAndOne);

// random numbers between zero and 6
let randomNumbersBetweenZeroAndSix = Math.random() * 6;
console.log("randomNumbersBetweenZeroAndSix", randomNumbersBetweenZeroAndSix);

// random numbers between zero and 100
let randomNumbersBetweenZeroAndHundred = Math.random() * 100;
console.log(
  "randomNumbersBetweenZeroAndHundred",
  randomNumbersBetweenZeroAndHundred
);

// Math.round() to Returns a supplied numeric expression rounded to the nearest integer.
const pi = 3.142;
let roundUp = Math.round(pi);
console.log("roundUp", roundUp);

// Returns the greatest integer less than or equal to its numeric argument.
const massOfElectron = 9.109;
const massOfElectronToFloor = Math.floor(massOfElectron);
console.log("massOfElectronToFloor", massOfElectronToFloor);

//Returns the smallest integer greater than or equal to its numeric argument.
console.log(Math.ceil(0.542));
console.log(Math.sin(60))
console.log(Math.cos(30))
