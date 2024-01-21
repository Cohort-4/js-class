/**
 * The 'import' keyword is an
 * ES6 module syntax for importing objects.
 */

/**
 * export default
 * uses the JavaScript export statement to export JavaScript objects,
 * functions, and primitive data types.
 * export default is used for exporting js modules
 * It is broken down into one of two techniques,
 * 1. default export and
 * 2. named exports.
 */

/**
 * The default export syntax
 * This works similarly to the module.exports syntax,
 * allowing us to export one module per file.
 */

// illustration of export default

// let CohortFourStudentSample = {};

// export default CohortFourStudentSample;

/**
 * Tasks illustration for default export
 * 1. create a file named student.js and inside it, create an object called 'CohortFourStudent'
 * 2. Add data to the created object that is properties and value.
 * 3. Create a key named 'availableStudent' and set it equal to an empty array
 * CohortFourStudents.availableStudent = []
 */

let CohortFourStudents = {};
CohortFourStudents.availableStudent = [
  {
    name: "taiwo",
    assignmentAttemped: 100,
  },
  { name: "Alameen", assignmentAttemped: 101 },
];

export default CohortFourStudents;