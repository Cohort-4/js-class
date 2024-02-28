/**
 * Write a function, finalGrade(). It should:
 * take three arguments of type number
 * find the average of those three numbers
 * return the letter grade (as a string) that the average corresponds to
 * return 'You have entered an invalid grade.' if any of the three grades are less than 0 or greater than 100
 * 0-59 should return: 'F'
 * 60-69 should return: 'D'
 * 70-79 should return: 'C'
 * 80-89 should return: 'B'
 * 90-100 should return: 'A'
 * It's probably a good idea to check that all the grades are valid first.
 * if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100))
 * Next, you'll need to find the average of the arguments that were passed in ((midterm + final + homework)/3).
 * Now that you have the sum, you can write your control flow to handle returning the letter grade.
 */

const finalGrade = (homeWork, midtermTest, finalExam) => {
  if (
   ( midtermTest < 0 ||
    midtermTest > 100) ||
   ( finalExam < 0 ||
    finalExam > 100) ||
   ( homeWork < 0 ||
    homeWork > 100)
  ) {
    return "You have entered an invalid grade.";
  }

  let average = (homeWork + midtermTest + finalExam) / 3;
  console.log(`You scored ${average}`);

  if (average < 60) {
    return "F";
  } else if (average < 70) {
    return "D";
  } else if (average < 80) {
    return "C";
  } else if (average < 90) {
    return "B";
  } else {
    return "A";
  }
};
console.log(finalGrade(0, 300, 700));
