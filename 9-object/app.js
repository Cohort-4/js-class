/**
 * Object
 * Objects store collections of key-value pairs.
 * composed of comma-separated key-value pairs
 * surrounded by curly braces {}.
 * objects are containers storing related data and functionality
 * "course level" has quotation marks because it contains a space character.
 */

const mySchoolProfile = {
  firstName: "Kehinde",
  lastName: "Alimi",
  department: "Physics",
  school: "Unilag",
  age: 22,
  courses: [
    "Electrodynamics",
    "Wave and Vibration",
    "Electromagnetism",
    "Quantum mechanics",
  ],
  "course level": "300L",
  gender: "Male",
  isAdmittedStatus: true,
};

/**
 * How to accessed properties of an object.
 * The property of an object can be accessed using
 * 1. Dot notation and
 * 2. Bracket notation
 */

// Dot Notation
const getFirstName = mySchoolProfile.firstName;
console.log("getFirstName", getFirstName);
const getThirdCourse = mySchoolProfile.courses[2];
console.log("getThirdCourse:", getThirdCourse);

// Bracket Notation
const getFirstNameWithBrackectNotation = mySchoolProfile["firstName"];
console.log(
  "getFirstNameWithBrackectNotation",
  getFirstNameWithBrackectNotation
);

const getGender = mySchoolProfile["gender"];
console.log("getGender", getGender);

/**
 * create an animal object of choice,
 * include all atrribute of that animals
 * Get name, color, sound and food
 */

const myCamel = {
  name: "Nunu",
  color: "White",
  age: 20,
  food: ["grass", "grains", "wheat", "oats"],
  myCamelSound() {
    return `${myCamel.name} is grunting`;
  },
};

let getCamelName = myCamel.name;
console.log("getCamelName:", getCamelName);

let getCamelSound = myCamel.myCamelSound();
console.log("getCamelSound:", getCamelSound);

/**
 * Editing a Property of an Object
 * In the same approach that we added a property to an object,
 * we can modify a key's value.
 * objectName.existingKey = new value;
 * Illustratin let add more hobbies item and courses.
 */

myCamel.name = "Burock";
console.log("myCamel", myCamel);

myCamel.age = "100";
console.log("myCamel", myCamel);

/**
 * Adding a Property or item to an object
 * can be done by assigning a value to a
 * new key that's attached to our object.
 * which can be achieved using Dot or Bracket Notation.
 * objectName.newKey = new value;
 * Example let add hobbies array to
 * mySchoolProfile object
 */

mySchoolProfile["Matric Number"] = "230450AA";
console.log('mySchoolProfile', mySchoolProfile)

/**
 * Methods in Object
 * pairing keys with functions
 * means that the function will be
 * called a "Method"
 */

const visitorProfile = {
  fullName: "Asafa Kosofe",
  state: "Gombe",
  departure: "Ogun",
  destination: "Lagos",
  welcomeMessage: (city) => {
    return `I just landed in ${city}`;
  },
  // es6 way of writing method
  returningMessage(name) {
    return `Goodbye ${name}`;
  },
};

console.log(visitorProfile.welcomeMessage("Lagos"));
console.log(visitorProfile.returningMessage("Alimi"));