```javascript

/**
 * Object
 * Objects store collections of key-value pairs known as property
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

const khalidProfile = {
  firstName: "Khalid",
  lastName: "Animashaun",
  age: 35,
  course: ["FullStack Dev", "Product Design"],
  level: "Beginner",
  "admission date": "2022 - 11 - 12",
  gender: "Male",
  isAdmittedStatus: true,
}

/**
 * How to accessed properties of an object.
 * The property of an object can be accessed using
 * 1. Dot notation and
 * 2. Bracket notation
 */

/**
 * Accessing properties of an object with dot notation
 */

const getFirstName = mySchoolProfile.firstName;
console.log(getFirstName);

const getAlimiCourses = mySchoolProfile.courses;
console.log(getAlimiCourses);
const getCourseNumThree = getAlimiCourses[3];
console.log("Course number 3=", getCourseNumThree);

/**
 * Brakect Notation
 */

const getLastName = mySchoolProfile["lastName"];
console.log("using bracket notation to get lastname:", getLastName);

const getisAdmittedStatus = mySchoolProfile["isAdmittedStatus"];
console.log(
  "using bracket notation to get Admission Status:",
  getisAdmittedStatus
);

const getDepartment = mySchoolProfile["department"];
console.log("getDepartment", getDepartment);


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

let myCamelName = myCamel.name;
console.log(myCamelName);
let camelSound = myCamel.myCamelSound();
console.log(camelSound);
let myCamelFood = myCamel.food[1];
console.log(myCamelFood);

console.log("Exammple on Loop");
for (const myCamelKey in myCamel) {
  console.log(`${myCamelKey} is of the keys in myCmael Object`);
}


/**
 * Advantage of Bracket notation over Dot notation.
 * Variables can be used inside the brackets to select the keys of an object
 * illustration
 */

const coursesRegistered = 6;

let courseAdvisor;

let studentDetails = {
  fullName: "John Doe",
  faculty: "Science",
  maxAvailableCourse: "Yeah, this is the required courses to registered",
  minAvailableCourse: "Yeah, this is not the required courses to registered",
};

if (coursesRegistered === 15 || coursesRegistered >= 12) {
  courseAdvisor = "maxAvailableCourse";
} else {
  courseAdvisor = "minAvailableCourse";
}
console.log(studentDetails[courseAdvisor]);

/**
 * Adding a Property or item to an object
 * can be done by assigning a value to a
 * new key that's attached to our object.
 * which can be achieved using Dot or Bracket Notation.
 * objectName.newKey = new value;
 * Example let add hobbies array to
 * mySchoolProfile object
 */

mySchoolProfile.hobbies = ["sport", "travelling", "watching movies", "coding"];
console.log(mySchoolProfile);
console.log(mySchoolProfile.hobbies);

mySchoolProfile["faculty"] = "Sciences";

console.log(mySchoolProfile);

/**
 * Editing a Property of an Object
 * In the same approach that we added a property to an object,
 * we can modify a key's value.
 * objectName.existingKey = new value;
 * Illustratin let add more hobbies item and courses.
 */

mySchoolProfile.hobbies = ["Driving", "Visiting Friends"];
mySchoolProfile["courses"] = ["Radiation Physics", "Heat Transfer"];
console.log(mySchoolProfile);

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

/**
 * Nested Objects
 * An object having another object as a property
 * which in turn could have a property
 * that's an array of even more objects!
 */


const hospital = {
  doctors: {
    cardiologist: {
      fullName: "Adeleke Momoh",
      degree: "Human Cardiologist",
      mainDuty() {
        console.log("We diagonise and treat Cardiovascular Disease");
      },
      "cvd types": [
        "Coronary Artery Disease",
        "Congestive Heart Failure",
        "Cardiomyopathy",
        "Arrhythmia",
        "Stroke",
      ],
      causes: ["Physical inactivity", "Unhealthy diets", "Smoking", "Alcohol"],
      "main risk factors": [
        "High Blood pressure",
        "High blood cholesterol",
        "Diabetes",
        "Smoking",
        "Obesity",
        "Sedentary lifestyle",
      ],
    },
    endocrinologist: {
      fullName: "Lawason Molefo",
      degree: "",
      endoActivity() {
        console.log(
          "Diagnose, treat and manage several different conditions that affect the endocrine system."
        );
      },
      "endocrine disorders": [
        "Diabetes",
        "Hyperthyroidism",
        "Hypothyroidism",
        "Cushing’s syndrome",
        "Acromegaly",
        "PCOS",
      ],
      Diagnosis: [
        "urine tests",
        "imaging scans",
        "genetic tests",
        "hormone tests",
        "blood tests",
      ],
    },
  },
  MRI: {
    yearBuilt: "2022",
    name: "Siemens 3T MRI Machine",
    model: "Magnetom Vida",
    "Magnetic Strength": "3 T (Tesla)",
    "Magnet Type": "Supercon",
    "Machine Condition": "Refurbished",
  },
};

// navigating complex, nested objects by chaining operators
const getCardioName = hospital.doctors.cardiologist.fullName;
const getMriModel = hospital.MRI.model;
console.log(getCardioName);
console.log(getMriModel);

/**
 * Using the delete method
 */

const myFavClubDetails = {
  clubName: "Liverpool",
  "home kit": "Red Jersey",
  "away kit": "White and Back",
  stadium: "Anfield",
  "present coach": "Jurgen Klopp",
  "top strikers": ["Mo Salah", "Gakpo", "Diego Jotta", "Matip"],
};

delete myFavClubDetails["away kit"];
delete myFavClubDetails["top strikers"][3];
console.log(myFavClubDetails);

/**
 * Objects can be mutated meaning, we can update/change their properties
 * whereas, we can't reassign an object declared with const.
 */

/**
 * Passing Object by Reference
 * we can pass a variable assigned to an object
 * into a function as an argument
 * functions which changes object properties actually
 * mutate the object permanently
 */

let clinic = {
  specialist: "Orthopaedic",
  location: "Lagos",
};

let isSpecialistAvailable = (obj) => {
  obj.isAvailable = true;
};
let isSpecialist = (obj) => {
  obj.specialist = "Endocrinology";
};

isSpecialistAvailable(clinic);

isSpecialist(clinic);

console.log(clinic);

/**
 * Iterating through objects using the For...in syntax.
 */

const hospitalEmployee = {
  staff: {
    "Medical Director": {
      fullName: "Mosafejo Alatise",
      degree: "Doctor of Osteopathic Medicine",
      coordinateTeam() {
        console.log(
          "organizes and coordinates physician services and services provided by other professionals as they relate to patient care"
        );
      },
    },
    cardiologist: {
      fullName: "Adeleke Momoh",
      degree: "Doctor of Osteopathic Medicine",
      cardioDuty() {
        console.log("We diagonise and treat Cardiovascular Disease");
      },
    },
    endocrinologist: {
      fullName: "Lawason Molefo",
      degree: "Doctor of Osteopathic Medicine",
      endoActivity() {
        console.log(
          "Diagnose, treat and manage several different conditions that affect the endocrine system."
        );
      },
    },
    orthopaedic: {
      fullName: "Alimi Koyejo",
      degree: "Doctor of Osteopathic Medicine",
      orthoActivity() {
        console.log(
          "deals with the treatment of bones that did not grow correctly or are damaged."
        );
      },
    },
    pediatrician: {
      fullName: "Oyindamola Titilope",
      degree: "Doctor of Osteopathic Medicine",
      pediatActivity() {
        console.log(
          "dealing with the health and medical care of infants, children, and adolescents."
        );
      },
    },
  },
};
// for (const medicalStaff in hospitalEmployee.staff) {
//   console.log(
//     `${medicalStaff}: ${hospitalEmployee.staff[medicalStaff].fullName}`
//   );
// }
for (const member in hospitalEmployee.staff) {
  console.log(`${member}: ${hospitalEmployee.staff[member].fullName}`);
}

/**
 * Another example
 */

let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },  
};

for (const crewMember in spaceship.crew) {
  console.log(spaceship.crew[crewMember].name);
  console.log(spaceship.crew["chief officer"].agree());
  console.log(spaceship.crew.medic.announce());
}


/**
 * In es6
 * Destructuring
 * const { keynames } = object
 */

const myDepartment = {
  DEAN: "Sholeye Bobado",
  Advisor: "Leke Maya",
  lecturer: ["Kamal", "Peter", "Prof. Odundun", "Prof. Awodugba"],
};
// console.log(myDepartment.DEAN); // Sholeye Bobado
// console.log(myDepartment["Advisor"]); // Leke Maya

const { DEAN, Advisor, lecturer } = myDepartment;
console.log(DEAN);
console.log(Advisor);
console.log(lecturer);

/**
 * Another example on  destructuring
 */

const myResult = {
  Thermodynamics: "90%",
  QuantumMechanics: "88%",
  Electromagnetism: "75%",
};

const { Thermodynamics, QuantumMechanics, Electromagnetism } = myResult;
console.log(Thermodynamics);
console.log(QuantumMechanics);
console.log(Electromagnetism);

/**
 * BuiltIn Methods in Object
 */

/**
 * Object.keys()
 * Returns the names of the enumerable string properties and
 * methods of an object.
 * @param o — Object that contains the properties and methods.
 * This can be an object that you created or an existing
 * Document Object Model (DOM) object.
 */

const myTask = {
  monday: "write some code",
  tuesday: "play football",
  wednesday: "visit a friend",
};
const myDailyTask = Object.keys(myTask);
console.log("myDailyTask =", myDailyTask); // [ 'monday', 'tuesday', 'wednesday' ]

/**
 * Object.entries()
 * Object that contains the properties and methods.  
 * This can be an object that you created or an existing
 * Document Object Model (DOM) object.
 * Returns an array of key/values of the enumerable properties
 * of an object
 */
const myTaskEntries = Object.entries(myTask);
console.log("myTaskEntries =", myTaskEntries); //  [ 'monday', 'write some code' ],
// [ 'tuesday', 'play football' ],
// [ 'wednesday', 'visit a friend' ]

/**
 * Object.assign({target}, source)
 * Copy the values of all of the enumerable own properties
 * from one or more source objects to a target object.
 * Returns the target object.
 * @param target — The target object to copy to.
 * @param source — The source object from which to copy properties.
 */

const newTask = Object.assign(
  {
    thursday: "prepare some note",
    friday: "take some rest",
  },
  myTask
);

console.log(newTask);
// {
//   thursday: 'prepare some note',
//   friday: 'take some rest',
//   monday: 'write some code',
//   tuesday: 'play football',
//   wednesday: 'visit a friend'
// }

/**
 * Object.freeze()
 * Prevents the modification of existing property attributes
 * and values, and prevents the addition of new properties.
 * @param f — Object on which to lock the attributes.
 * Trying to add/modify a property will throw an error
 * because the object has been freezed
 * i.e A frozen object can no longer be changed
 */


const schoolExamReport = {
  MTH101: "80A",
  CHM101: "65B",
  PHY101: "70A",
};

const freezeReport = Object.freeze(schoolExamReport);
console.log(freezeReport);

schoolExamReport.MTH101 = "100A"; // Throws an error in strict
console.log(schoolExamReport.MTH101);


/**
 * Map method in Object
 */

const userMap = new Map([
  [1, { name: "Alimi" }],
  [2, { name: "Kehinde" }],
]);
userMap.set(3, { name: "abdullah" });
console.log(userMap.keys())
console.log(userMap.values());
console.log(userMap.get(3))


```