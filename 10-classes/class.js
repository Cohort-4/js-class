/**
 * Introduction to Classes
 * An object-oriented programming (OOP) in JavaScript
 * can be used to model real-world examples
 * To create a class, we write the class keyword
 * followed by class name with the first letter
 * capitalize
 */

class MarusoftDigitalSkills4 {}

/**
 * Constructor
 * Constructor is the method JavaScript calls every time
 * it creates a new instance of a class
 */

class MarusoftDigitalSkills {
  constructor(course, duration) {
    this.course = course;
    this.duration = duration;
  }
}

// class Animal {
//   constructor(eat) {
//     this.eat = eat;
//     this._haveFourLeg = 4;
//   }
//   get animalNumOfLeg() {
//     return this._haveFourLeg;
//   }
//   get timeToEat() {
//     return eat;
//   }
// }
// const Dog = new Animal("bone", "true");
// console.log(Dog.eat);
// console.log(Dog.animalNumOfLeg);

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

const courseOne = new MarusoftDigitalSkills("Frontend Development", "6 months");

console.log("courseOne", courseOne);
console.log(courseOne.course);
console.log(courseOne.duration);

//another instance of class MarusoftDigitalSkills
const courseTwo = new MarusoftDigitalSkills("Backend Development", "6 months");

console.log("courseTwo", courseTwo);
console.log(courseTwo.course);
console.log(courseTwo.duration);

/**
 * Class Method, we are going to use
 * the 'get' keyword with property names
 * followed by a parentheses and curly
 * brace. The property names will be
 * prepended with underscores (_courses, _duration)
 * which indicate these properties should not
 *  be accessed directly.
 */

class MaTraining {
  constructor(course, duration) {
    this._course = course;
    this._duration = duration;
    this._numberOfStudent = 6;
  }

  get course() {
    return this._course;
  }

  get duration() {
    return this._duration;
  }
  get studentTotal() {
    return this._numberOfStudent;
  }
  incrementNumberOfStudent() {
    return this._numberOfStudent++;
  }
}

// Create a MaTraining course FullStack Development and duration 12 Months
const cohortThree = new MaTraining("FullStack Development", "12 Months");
console.log("cohortThree =>", cohortThree);

/**
 * How to use Methods to access and manipulate data
 */

// incrementing the number of students in cohortThree instance
// add 1 student to cohortThree instance's studentTotal
cohortThree.incrementNumberOfStudent();

// Log the total number students available
console.log("Total number of student == ", cohortThree.studentTotal);

// creating another instance of MaTraining

const cohortFour = new MaTraining("Product Design", "6 months");
console.log(cohortFour);
console.log(cohortFour.studentTotal);

// class activity
/**
 * Create a class BookStore, with a constructor that takes "title" and "bookType"
 * and extra properties called "availableBooks" with initial value of 50.
 * create a getter methods that will get the book title, bookType and availableBooks.
 * create custom method called remainingBooks that takes a parameter named "removeBooks".
 * Create an instances of the book Class with value of choice, log the book "title"
 * and if for example someone lend three(3) books from BookStore class, then called the
 * book instance on "availableBooks" to get the number of books available in the store.
 */

class BookStore {
  constructor(title, bookType) {
    this._title = title;
    this._bookType = bookType;
    this._availableBooks = 50;
  }
  get title() {
    return this._title;
  }
  get bookType() {
    return this._bookType;
  }
  get availableBooks() {
    return this._availableBooks;
  }
  remainingBooks(removeBooks) {
    this._availableBooks = 50 - removeBooks;
    // this._availableBooks -= removeBooks;
  }
}
const book = new BookStore("Essential Chemistry", "Science");
console.log(book);
console.log(book.title);

book.remainingBooks(3);

console.log(book.availableBooks);

/**
 * Inheritance
 * A process where multiple classes share properties or methods
 * with their parent class(superclass)
 * It is a way whereby child classes inherit the properties
 * and methods from their parent class
 * Below is a parent class created called Animal
 */

//  ======= Parent Class(Superclass) ======
class Animal {
  constructor(name) {
    this._name = name;
    this._numberOfFeedTime = 3;
  }
  get name() {
    return this._name;
  }

  get numberOfFeedTime() {
    return this._numberOfFeedTime;
  }
  incrementNumberOfFeedTime(feedTime) {
    this._numberOfFeedTime += feedTime;
  }
}

// ======= Child Class (Subclasses) =======

// class Lion {
//   constructor() {}
// }

// class Elephant {
//   constructor() {}
// }

/**
 * Extending Properties and Methods of the
 * Parent class(Superclass) to a Child class(Subclass)
 * Lion, Elephant using the 'extends' keyword
 * The extends keyword makes the methods of
 * the animal class available inside the lion class.
 * The super keyword calls the constructor of the parent class.
 * In this case, super(name) passes the name argument of
 * the Lion class to the constructor of the Animal class.
 */

// create a new class named Lion that extends the Animal class.
// class Lion extends Animal {
//   constructor(name, haveManes, habitats) {
//     super(name);
//     this._hasManes = haveManes;
//     this._habitats = habitats;
//   }
// }

class Lion extends Animal {
  constructor(name, haveManes, habitats) {
    super(name);
    this._hasManes = haveManes;
    this._habitats = habitats;
  }
  get habitats() {
    return this._habitats;
  }
  addHabitat(newHabitat) {
    return this._habitats.push(newHabitat);
  }
}
const lion = new Lion("Simba", true, [
  "Savannas",
  "Grassland",
  "Open woodland",
]);
console.log(lion);
console.log(lion.name);
console.log(lion._habitats[0]);
lion.incrementNumberOfFeedTime(3); // Call .incrementNumberOfFeedTime() on Lion instance
console.log(lion.numberOfFeedTime); // Log value saved to numberOfFeedTime
lion.addHabitat("dry thorn forest");
console.log(lion.habitats);

/**
 * In summary
 * In this illustration, we create a new instance the Lion class,
 * named lion. We pass it 'Simba' and true for our name
 * and haveManes arguments.
 * When we call console.log(lion.name) our program prints, Simba.
 */
// const lion = new Lion("Simba", true, [
//   "Savannas",
//   "Grassland",
//   "Open woodland",
// ]);
// console.log(lion);
// console.log(lion.name);
// console.log(lion._habitats[0])

/**
 * Child access to Parent's properties and methods
 * In the illustration above, our Lion class extends Animal,
 * As a result, the Lion class has access to the Animal getters and the
 * .incrementNumberOfFeedTime() method.
 * We also created a Lion instance named lion that has access to the name
 * getter
 */

/**
 * The Lion class inherits the _numberOfFeedTime property, _numberOfFeedTime
 * getter, and the .incrementNumberOfFeedTime() method from the Animal class.
 */

// lion.incrementNumberOfFeedTime(3); // Call .incrementNumberOfFeedTime() on Lion instance
// console.log(lion.numberOfFeedTime); // Log value saved to numberOfFeedTime

/**
 * Adding new methods to Subclasses
 * Child classes own properties,
 * getters, setters, and methods.
 */

// class Lion extends Animal {
//   constructor(name, haveManes, habitat) {
//     super(name);
//     this._hasManes = haveManes;
//     this._habitats = habitats;
//   }
//   get habitats() {
//     return this._habitats;
//   }
//    addHabitat(newHabitat) {
//     return this._habitats.push(newHabitat);
//   }
// }

// lion.addHabitat("dry thorn forest");
// console.log(lion.habitats)

/**
 * Class Activity
 * Use class to perform simple arithmetics
 * addition, subtraction, multiplication and division
 *
 */

/**
 * Static Methods 1
 * Are methods that can be called directly from a class
 * that are not available in individual class instances.
 * Static methods are called on the class
 */

class Vehicle {
  constructor(vehicleType) {
    this._vehicleType = vehicleType;
    this._behavior = 0;
  }

  static generateVehicleTypes() {
    const vehicleTypes = [
      "Bus",
      "Van",
      "Taxi",
      "Skateboard",
      "Forklift",
      "Crane",
      "Helicopter",
    ];
    const randomNumber = Math.floor(Math.random() * 7);
    return vehicleTypes[randomNumber];
  }
}

/**
 * In the example above, we create a static method
 * called .generateName() that returns a random vehicleType
 * when it's called. Because of the static keyword,
 * we can only access .generateName() by appending it to the Animal class.
 */
console.log(Vehicle.generateVehicleTypes()); // return a vehicleType

/**
 * .generateVehicleTypes() method cannot be access
 * from instances of the Vehicle class or instances of its subclasses
 */

const forklift = new Vehicle("3 wheel forklift");
// forklift.generateVehicleTypes() // TypeError: forklift.generateVehicleTypes is not a function

/**
 * Static Methods 2
 */
class Car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  static comparePrice(a, b) {
    if (a.price > b.price) {
      return `${a.name} costs more`;
    } else if (b.price > a.price) {
      return `${b.name} costs more`;
    } else {
      return `both same price`;
    }
  }
}
const audi = new Car("Audi", 12);
const tata = new Car("Tata", 9);
const kia = new Car("Kia", 9);
console.log(Car.comparePrice(audi, kia));

/**
 * Static Methods 3
 */

class Dinosaur {
  static numberOfDinosaurs = 0;
  constructor(species, diet) {
    this.species = species;
    this.diet = diet;
    Dinosaur.numberOfDinosaurs++;
  }
  static getNumberOfDinosaur() {
    return Dinosaur.numberOfDinosaurs;
  }
}
const dino1 = new Dinosaur("Tyrannosaurus", "Carnivore");
const dino2 = new Dinosaur("Triceratops", "Herbivore");

const numberOfDinosaurs = Dinosaur.getNumberOfDinosaur(); // 2
console.log(numberOfDinosaurs);

/**
 * getter Methods are use to
 * get or retrieve the value of a property!
 * Getters are methods that get and return the
 * internal properties of an object.
 */
const person = {
  _firstName: "John",
  _lastName: "Doe",
  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return "Missing a first name or a last name.";
    }
  },
};

console.log(person._firstName); // 'John Doe'

// example
const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return `My current energy level is ${this._energyLevel}%`;
    } else {
      return `System malfunction: cannot retrieve energy level`;
    }
  },
};
console.log(robot.energyLevel);

/**
 * setter Methods
 * setter methods are used to reassign values of
 * existing properties within an object.
 */

const personProfile = {
  _age: 37,
  set age(newAge) {
    if (typeof newAge === "number") {
      this._age = newAge;
    } else {
      console.log("You must assign a number to age");
    }
  },
};
personProfile._age = 40;
console.log(personProfile._age); // Logs: 40

/**
 * Developers use an underscore before a property name
 * to indicate a property or value should not be modified directly by other code.
 */

let restaurant = {
  _name: "Italian Bistro",
  _seatingCapacity: 120,
  _hasDineInSpecial: true,
  _entrees: ["Penne alla Bolognese", "Chicken Cacciatore", "Linguine pesto"],

  set seatingCapacity(newCapacity) {
    if (typeof newCapacity === "number") {
      this._seatingCapacity = newCapacity;
      console.log(`${newCapacity} is valid input.`);
    } else {
      console.log(`Change ${newCapacity} to a number.`);
    }
  },
};
restaurant._seatingCapacity = 300;
console.log(restaurant._seatingCapacity);
