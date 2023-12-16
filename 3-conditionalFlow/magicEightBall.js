const userName = "Alimi";

userName ? console.log(`Hello ${userName}`) : console.log("Hello");

const userQuestion = "What is es6";

console.log(`${userName} asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall =
      "ES6 refers to version 6 of the ECMA Script programming language";
    break;
  case 1:
    eightBall = "ECMA Script is the standardized name for JS,";
    break;
  case 2:
    eightBall = "version 6 is the next version after version 5";
    break;
  case 3:
    eightBall = "major enhancement to the JS language";
    break;
  case 4:
    eightBall = "and adds many more features";
    break;
  case 5:
    eightBall = "make large-scale software development easier";
    break;
  case 6:
    eightBall = "ES6 was published in June 2015";
    break;
  case 7:
    eightBall = "a transpiler to convert ES6 code into ES5";
    break;

  default:
    console.log("No idea");
    break;
}

console.log(`The eight ball answered: ${eightBall}`);
