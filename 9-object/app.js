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
console.log("mySchoolProfile", mySchoolProfile);

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

console.log(visitorProfile.returningMessage("Alimi"));
console.log(visitorProfile.welcomeMessage("Lagos"));

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
  "away kit": "White and Black Jersey",
  stadium: "Anfield",
  "present coach": "Jurgen Klopp",
  "top strikers": ["Mo Salah", "Gakpo", "Diego Jota", "Matip"],
};

delete myFavClubDetails["away kit"];
delete myFavClubDetails["top strikers"][3];
console.log(myFavClubDetails);

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

const departmentCat = {
  units: {
    "agriculture-and-rural-development": {
      title: "Agriculture Department",
      desc: "Lorem ipsum dolor sit amet consectetur. Fringilla netus faucibus bibendum porttitor enim luctus mattis. Quam nullam dui eget faucibus ultricies neque proin lorem fames. Etiam in praesent urna dignissim. Enim faucibus integer faucibus eu placerat eget elit vitae. Lorem ipsum dolor sit amet consectetur. Fringilla netus faucibus bibendum porttitor enim luctus mattis. Quam nullam dui eget faucibus ultricies neque proin lorem fames. Etiam in praesent urna dignissim. Enim faucibus integer faucibus eu placerat eget elit vitae. Lorem ipsum dolor sit amet consectetur. Fringilla netus faucibus bibendum porttitor enim luctus mattis. Quam nullam dui eget faucibus ultricies neque proin lorem fames. Etiam in praesent urna dignissim. Enim faucibus integer faucibus eu placerat eget elit vitae.",
      image: "/images/svg/healthDepartment.svg",
      team: "Agriculture Team",
      member: [
        {
          id: 1,
          avatar: "/images/svg/dr-1.svg",
          name: "Dr. Akinwunmi Adedoyin",
          role: "Medical Director",
        },
        {
          id: 2,
          avatar: "/images/svg/dr-2.svg",
          name: "Dr. Adekunle Wolewa",
          role: "ASt Medical Director",
        },
        {
          id: 3,
          avatar: "/images/svg/dr-3.svg",
          name: "Dr. Adelabu Adedoyin",
          role: "Matron",
        },
        {
          id: 4,
          avatar: "/images/svg/dr-4.svg",
          name: "Dr. Alatise Titilayo",
          role: "Nurse",
        },
      ],
      gallery: "Gallary",
      projects: [
        {
          id: 1,
          bgImage: "/images/svg/health-gal-1.svg",
          altText: "project avatar",
        },
        {
          id: 2,
          bgImage: "/images/svg/health-gal-2.svg",
          altText: "project avatar",
        },
        {
          id: 3,
          bgImage: "/images/svg/health-gal-3.svg",
          altText: "project avatar",
        },
      ],
    },
    "information-and-communications-technology": {
      title: "Agriculture Department",
      desc: "Lorem ipsum dolor sit amet consectetur. Fringilla netus faucibus bibendum porttitor enim luctus mattis. Quam nullam dui eget faucibus ultricies neque proin lorem fames. Etiam in praesent urna dignissim. Enim faucibus integer faucibus eu placerat eget elit vitae. Lorem ipsum dolor sit amet consectetur. Fringilla netus faucibus bibendum porttitor enim luctus mattis. Quam nullam dui eget faucibus ultricies neque proin lorem fames. Etiam in praesent urna dignissim. Enim faucibus integer faucibus eu placerat eget elit vitae. Lorem ipsum dolor sit amet consectetur. Fringilla netus faucibus bibendum porttitor enim luctus mattis. Quam nullam dui eget faucibus ultricies neque proin lorem fames. Etiam in praesent urna dignissim. Enim faucibus integer faucibus eu placerat eget elit vitae.",
      image: "/images/svg/healthDepartment.svg",
      team: "Agriculture Team",
      member: [
        {
          id: 1,
          avatar: "/images/svg/dr-1.svg",
          name: "Dr. Akinwunmi Adedoyin",
          role: "Medical Director",
        },
        {
          id: 2,
          avatar: "/images/svg/dr-2.svg",
          name: "Dr. Adekunle Wolewa",
          role: "ASt Medical Director",
        },
        {
          id: 3,
          avatar: "/images/svg/dr-3.svg",
          name: "Dr. Adelabu Adedoyin",
          role: "Matron",
        },
        {
          id: 4,
          avatar: "/images/svg/dr-4.svg",
          name: "Dr. Alatise Titilayo",
          role: "Nurse",
        },
      ],
      gallery: "Gallary",
      projects: [
        {
          id: 1,
          bgImage: "/images/svg/health-gal-1.svg",
          altText: "project avatar",
        },
        {
          id: 2,
          bgImage: "/images/svg/health-gal-2.svg",
          altText: "project avatar",
        },
        {
          id: 3,
          bgImage: "/images/svg/health-gal-3.svg",
          altText: "project avatar",
        },
      ],
    },
    "legal-unit": {
      title: "Agriculture Department",
      desc: "Lorem ipsum dolor sit amet consectetur. Fringilla netus faucibus bibendum porttitor enim luctus mattis. Quam nullam dui eget faucibus ultricies neque proin lorem fames. Etiam in praesent urna dignissim. Enim faucibus integer faucibus eu placerat eget elit vitae. Lorem ipsum dolor sit amet consectetur. Fringilla netus faucibus bibendum porttitor enim luctus mattis. Quam nullam dui eget faucibus ultricies neque proin lorem fames. Etiam in praesent urna dignissim. Enim faucibus integer faucibus eu placerat eget elit vitae. Lorem ipsum dolor sit amet consectetur. Fringilla netus faucibus bibendum porttitor enim luctus mattis. Quam nullam dui eget faucibus ultricies neque proin lorem fames. Etiam in praesent urna dignissim. Enim faucibus integer faucibus eu placerat eget elit vitae.",
      image: "/images/svg/healthDepartment.svg",
      team: "Agriculture Team",
      member: [
        {
          id: 1,
          avatar: "/images/svg/dr-1.svg",
          name: "Dr. Akinwunmi Adedoyin",
          role: "Medical Director",
        },
        {
          id: 2,
          avatar: "/images/svg/dr-2.svg",
          name: "Dr. Adekunle Wolewa",
          role: "ASt Medical Director",
        },
        {
          id: 3,
          avatar: "/images/svg/dr-3.svg",
          name: "Dr. Adelabu Adedoyin",
          role: "Matron",
        },
        {
          id: 4,
          avatar: "/images/svg/dr-4.svg",
          name: "Dr. Alatise Titilayo",
          role: "Nurse",
        },
      ],
      gallery: "Gallary",
      projects: [
        {
          id: 1,
          bgImage: "/images/svg/health-gal-1.svg",
          altText: "project avatar",
        },
        {
          id: 2,
          bgImage: "/images/svg/health-gal-2.svg",
          altText: "project avatar",
        },
        {
          id: 3,
          bgImage: "/images/svg/health-gal-3.svg",
          altText: "project avatar",
        },
      ],
    },
    "procurement-unit": {
      title: "Agriculture Department",
      desc: "Lorem ipsum dolor sit amet consectetur. Fringilla netus faucibus bibendum porttitor enim luctus mattis. Quam nullam dui eget faucibus ultricies neque proin lorem fames. Etiam in praesent urna dignissim. Enim faucibus integer faucibus eu placerat eget elit vitae. Lorem ipsum dolor sit amet consectetur. Fringilla netus faucibus bibendum porttitor enim luctus mattis. Quam nullam dui eget faucibus ultricies neque proin lorem fames. Etiam in praesent urna dignissim. Enim faucibus integer faucibus eu placerat eget elit vitae. Lorem ipsum dolor sit amet consectetur. Fringilla netus faucibus bibendum porttitor enim luctus mattis. Quam nullam dui eget faucibus ultricies neque proin lorem fames. Etiam in praesent urna dignissim. Enim faucibus integer faucibus eu placerat eget elit vitae.",
      image: "/images/svg/healthDepartment.svg",
      team: "Agriculture Team",
      member: [
        {
          id: 1,
          avatar: "/images/svg/dr-1.svg",
          name: "Dr. Akinwunmi Adedoyin",
          role: "Medical Director",
        },
        {
          id: 2,
          avatar: "/images/svg/dr-2.svg",
          name: "Dr. Adekunle Wolewa",
          role: "ASt Medical Director",
        },
        {
          id: 3,
          avatar: "/images/svg/dr-3.svg",
          name: "Dr. Adelabu Adedoyin",
          role: "Matron",
        },
        {
          id: 4,
          avatar: "/images/svg/dr-4.svg",
          name: "Dr. Alatise Titilayo",
          role: "Nurse",
        },
      ],
      gallery: "Gallary",
      projects: [
        {
          id: 1,
          bgImage: "/images/svg/health-gal-1.svg",
          altText: "project avatar",
        },
        {
          id: 2,
          bgImage: "/images/svg/health-gal-2.svg",
          altText: "project avatar",
        },
        {
          id: 3,
          bgImage: "/images/svg/health-gal-3.svg",
          altText: "project avatar",
        },
      ],
    },
    health: {
      title: "Agriculture Department",
      desc: "Lorem ipsum dolor sit amet consectetur. Fringilla netus faucibus bibendum porttitor enim luctus mattis. Quam nullam dui eget faucibus ultricies neque proin lorem fames. Etiam in praesent urna dignissim. Enim faucibus integer faucibus eu placerat eget elit vitae. Lorem ipsum dolor sit amet consectetur. Fringilla netus faucibus bibendum porttitor enim luctus mattis. Quam nullam dui eget faucibus ultricies neque proin lorem fames. Etiam in praesent urna dignissim. Enim faucibus integer faucibus eu placerat eget elit vitae. Lorem ipsum dolor sit amet consectetur. Fringilla netus faucibus bibendum porttitor enim luctus mattis. Quam nullam dui eget faucibus ultricies neque proin lorem fames. Etiam in praesent urna dignissim. Enim faucibus integer faucibus eu placerat eget elit vitae.",
      image: "/images/svg/healthDepartment.svg",
      team: "Agriculture Team",
      member: [
        {
          id: 1,
          avatar: "/images/svg/dr-1.svg",
          name: "Dr. Akinwunmi Adedoyin",
          role: "Medical Director",
        },
        {
          id: 2,
          avatar: "/images/svg/dr-2.svg",
          name: "Dr. Adekunle Wolewa",
          role: "ASt Medical Director",
        },
        {
          id: 3,
          avatar: "/images/svg/dr-3.svg",
          name: "Dr. Adelabu Adedoyin",
          role: "Matron",
        },
        {
          id: 4,
          avatar: "/images/svg/dr-4.svg",
          name: "Dr. Alatise Titilayo",
          role: "Nurse",
        },
      ],
      gallery: "Gallary",
      projects: [
        {
          id: 1,
          bgImage: "/images/svg/health-gal-1.svg",
          altText: "project avatar",
        },
        {
          id: 2,
          bgImage: "/images/svg/health-gal-2.svg",
          altText: "project avatar",
        },
        {
          id: 3,
          bgImage: "/images/svg/health-gal-3.svg",
          altText: "project avatar",
        },
      ],
    },
  },
};
let element = {}
for (const unit in departmentCat) {
  if (Object.hasOwnProperty.call(departmentCat, unit)) {
    element = departmentCat[unit];
    console.log(element)
  }
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
console.log(`Dean: ${DEAN},`,  `Advisor: ${Advisor},`, `Lecturer: ${lecturer}`);
// console.log(Advisor);
// console.log(lecturer);


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

let myObject = new Object(
  Object.keys({
    name: "John",
    class: "jss1",
    radius: 3,
    sex: "male",
  })
);
console.log(myObject) // [ 'name', 'class', 'radius', 'sex' ]

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
 * set() Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
 */
const userMap = new Map([
  [1, { name: "Alimi" }],
  [2, { name: "Kehinde" }],
]);
userMap.set()
userMap.set(3, { name: "abdullah" });
console.log(userMap.keys())
console.log(userMap.values());
console.log(userMap.get(3))
