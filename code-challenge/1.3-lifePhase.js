/**
 * Write a function, lifePhase(), that takes in a person's age, as a number,
 * and returns which phase of life they are in.
 * Here are the classifications:
 * 0-3 should return 'baby'
 * 4-12 should return 'child'
 * 13-19 should return 'teen'
 * 20-64 should return 'adult'
 * 65-140 should return 'senior citizen'
 * If the number is less than 0 or greater than 140,
 * the program should return 'This is not a valid age'
 * You'll need to write multiple if statements.
 */
const lifePhase = (age) => {
  if (age < 0 || age > 140) {
    console.log("This is not a valid age");
  } else if (age < 4) {
    console.log("You are baby");
  } else if (age < 13) {
    console.log("You are child");
  } else if (age < 20) {
    console.log("You are teen");
  } else if (age < 65) {
    console.log("You are an adult");
  } else {
    return "Senior Citizen";
  }
};
