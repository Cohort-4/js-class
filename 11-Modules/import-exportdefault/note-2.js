import CohortFourStudents from "./note-1";


const displayStudentAssignment = () => {
  CohortFourStudents.availableStudent.forEach((student) => {
    console.log(
      `The number of attempted assignment of ${student.name} : ${student.assignmentAttemped} `
    );
  })
}
displayStudentAssignment()