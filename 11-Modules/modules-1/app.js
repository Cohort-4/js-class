import hospitalRecord from "./logic.js";

// console.log(hospitalRecord);
const getPatientNames = hospitalRecord.recordBook.forEach((record) => {
  console.log(record["Patient Name"]);
});
console.log(getPatientNames);
