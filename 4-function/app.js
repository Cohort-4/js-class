// Example 1
function helloStudent(student) {
  return `Hello ${student}`;
}
const greetings = helloStudent("Taiwo");
console.log(greetings);

/**
 * Calculate area of a circle
 * Area of a circle = pi * r * r
 */

function calculateAreaOfCircle(r) {
  return Math.PI * r * r;
}
const answer = calculateAreaOfCircle(3);
console.log(answer);

/**
 * Calculate perimeter of rectangle
 * perimeter of rectangle = l + l + b + b
 */
function perimeterOfRectangle(l, b) {
  return l + l + b + b;
}
const result = perimeterOfRectangle(4, 7);
console.log(result);

/**
 * Calculate BMI
 * weight / (height x height)
 */

function calculateBodyMasIndex(w, h) {
  return w / (h * h);
}
const bmiResult = calculateBodyMasIndex(75, 1.9);
console.log("bmiResult", bmiResult);

/**
 * Another string example
 */
function cityIlove(city) {
  return "I love " + city;
}
let mostLoveCity = cityIlove("Lagos");
console.log("mostLoveCity =", mostLoveCity);

/**
 * in es6
 * {}, $ ``
 */

function placeILove(place) {
  return `The most beloved place to me is ${place}`;
}
const iLove = placeILove("paradise");
console.log("iLove =", iLove);

/**
 * Function expression example
 */

const sayHello = function (name) {
  return `Welcome to JS class ${name}`;
};
let sayHelloResult = sayHello("Alimi");
console.log("sayHelloResult = ", sayHelloResult);

/**
 * Arrow Function
 */

let multiplyNumbers = (num) => {
  return num * num;
};
let arrowFunctionResult = multiplyNumbers(4);
console.log("arrowFunctionResult = ", arrowFunctionResult);

/**
 * Another example
 * concise function body
 */
let multiplyTwoNumbers = (height) => height * height;
const mulyiplyResult = multiplyTwoNumbers(7);
console.log("mulyiplyResult = ", mulyiplyResult);

/**
 * Another example
 * power Of Two
 */

let powerOfTwo = (x, y) => Math.pow(x, y);
console.log("powerOfTwo = ", powerOfTwo(3, 2));

/**
 * Question 1
 * Create a function named welcomeHome that will take name as parameter and return
 * the string 'welcome back home ${name}'
 */
const welcomeHome = (name) => {
  return `Welcome back home ${name}.`;
};
const welocomeBackMessage = welcomeHome("Alimi");
console.log("welocomeBackMessage = ", welocomeBackMessage);

/**
 * Question 2
 * Write a function called volumeOfSphere to calculate the volume of a sphere
 * volume = 4/3πr3
 */
const volumeOfSphere = function (r) {
  return (4 / 3) * Math.PI * r * r * r;
};
let volumeOfSphereResult = Math.round(volumeOfSphere(4));
console.log("volumeOfSphereResult = ", volumeOfSphereResult);
/**
 * Question 3
 * Write a function named favoriteCity that will
 * takes your name and favorite city as parameters and
 * will return the strings `My name is ${name} and my favorite city is ${city}`
 */

function favoriteCity(name, city) {
  return `My name is ${name} and my favorite city is ${city}.`;
}
let favoriteCityOutput = favoriteCity("Kehinde", "Asaba");
console.log('favoriteCityOutput = ', favoriteCityOutput)
