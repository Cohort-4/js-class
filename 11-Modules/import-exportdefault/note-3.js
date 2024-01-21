/**
 * Named Exports
 * This is a second common approach to export modules
 * introduced by ES6.
 * In addition to default export, named exports
 * allow us to export data through the use of variables.
 * exports objects by their variable names
 */



let availableTutors = [
  {
    "First Name": "Kehinde",
    "Last Name": "Alimi",
    skills: ["Node", "Reactjs", "Nextjs", "Database", "HTML/CSS"],
    "Years of Experience": 6,
  },
  {
    "First Name": "Taofeek",
    "Last Name": "Aderoju",
    skills: ["Node", "Reactjs", "Angular", "HTML/CSS", "UI/UX", "Graphics"],
    "Years of Experience": 10,
  },
  {
    "First Name": "Jafar",
    "Last Name": "Liammed",
    skills: [
      "Node",
      "Reactjs",
      "Nextjs",
      "Data Science",
      "HTML/CSS",
      "Python",
      "SQL",
      "Excel",
    ],
    "Years of Experience": 3,
  },
];

let numberOfTutorRequired = {
  requiredStaff: 3,
};

const meetBootCampRequirement = (availableStaff, requiredStaff) => {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export { availableTutors, numberOfTutorRequired, meetBootCampRequirement };
