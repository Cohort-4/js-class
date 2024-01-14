```javascript

/**
 * Introduction to Classes
 * An object-oriented programming (OOP) in JavaScript
 * can be used to model real-world examples
 * To create a class, we write the class keyword
 * followed by class name and curly brace with the first letter of the class name
 * capitalize
 */

class MarusoftDigitalSkills4 {

}
class MyProfile {
  

}

/**
 * Constructor
 * Constructor is the method in oop JavaScript calls every time
 * it creates a new instance of a class
 */

class MarusoftDigitalSkills {
  constructor(course, duration, certificationType) {
    this.course = course;
    this.duration = duration;
    this.certificationType = certificationType;
  }
}
const skill = new MarusoftDigitalSkills("Data Science", "6 month", "Complete Certificate")


/**
 * Instance of a Class
 * An instance is an object that contains the
 * property names and methods of a class,
 * but with unique property values.
 * To create a instance of a class, we use the 'new' keyword
 * followed by classname with parentheses.
 * The 'new' keyword calls the constructor(), runs the code
 * inside of it, and then returns the new instance.
 */

// this is an instance of class MarusoftDigitalSkills
// setting the course to "Frontend Development" and
// duration to "6 months"
const courseOne = new MarusoftDigitalSkills("Frontend Development", "6 months");

console.log(courseOne);
console.log(courseOne.course);
console.log(courseOne.duration);

// Another instance of class MarusoftDigitalSkills with course and duration
const courseTwo = new MarusoftDigitalSkills("Backend Development", "6 months");

console.log(courseTwo);
console.log(courseTwo.course);
console.log(courseTwo.duration);

/**
 * How to add getters, setters, and methods.
 * Class Method, we are going to use
 * the 'get' keyword with property names
 * followed by a parentheses and curly
 * brace. The property names will be
 * prepended with underscores (_courses, _duration)
 * which indicate these properties should not
 * be accessed directly.
 */

class MaCohort4 {
  constructor(courses, duration) {
    this._courses = courses;
    this._duration = duration;
    this._numberOfStudent = 6;
  }

  get courses() {
    return this._courses;
  }

  get duration() {
    return this._duration;
  }
  get studentTotal() {
    return this._numberOfStudent;
  }
  incrementNumberOfStudent() {
    this._numberOfStudent++;
  }
}

const currentCohort = new MaCohort4("FullStack Development", "12 Months");
console.log(currentCohort.studentTotal);


```