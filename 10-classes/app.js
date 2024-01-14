class MyProfile {
  constructor(name, matricnumber, course, department) {
    this.name = name;
    this.matricnumber = matricnumber;
    this.course = course;
    this.department = department;
  }
}

let profile = new MyProfile("olumide", 12222, "physics", "sciences");
console.log(profile);

const getMatricNumber = profile.matricnumber;
const getCourse = profile.course;
const getName = profile.name;
let getDepartment = profile.department;
console.log(getCourse, getDepartment, getName, getMatricNumber);

/**
 *  Animal class
 */

class MyCamel {
  constructor(name, food) {
    this._name = name;
    this._food = food;
    this._typesOfCamel = ["arabia", "bactrian", "new world"];
    this._lifeSpan = 40;
  }
  get camelName() {
    return this._name;
  }
  get camelFood() {
    return this._food;
  }
  get cameLifeSpan() {
    return this._lifeSpan;
  }
  maximumLifeSpan() {
    return this._lifeSpan++;
  }
  minimumLifeSpan() {
    return this._lifeSpan--;
  }
}
let arabia = new MyCamel("Burock", "Wheat");
arabia.maximumLifeSpan();
console.log(arabia);

let bactrian = new MyCamel("Bactrian", "Grain");
bactrian.minimumLifeSpan();
console.log(bactrian);

console.log(arabia.cameLifeSpan);
console.log(bactrian.cameLifeSpan);


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

/**
 * Solution To BookStore
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
 */

//parent class
class Vehicle {
  constructor(model, make) {
    this._model = model;
    this._make = make;
  }
}

// child class

class Car extends Vehicle {
  constructor(model, make, size, loadSpace) {
    super(model, make);
    this._nunberOfTyres = 4;
    this._size = size;
    this._loadSpace = loadSpace;
  }
  get carSize() {
    return this._size;
  }
  get carMake() {
    return this._make;
  }
  get carModel() {
    return this._model;
  }
  get loadSpaceContent() {
    return this._loadSpace;
  }
  addLoadToBoot(newload) {
    return this._loadSpace.push(newload);
  }
}

class Bicycle extends Vehicle {
  constructor(model, make) {
    super(model, make);
    this._numberOfwheel = 2;
  }
  get carMake() {
    return this._make;
  }
  get carModel() {
    return this._model;
  }
}

let carLexus = new Car("2021 lexus", "Toyota", "Jeep", [
  "rice",
  "banana",
  "cassava",
  "waterleaf",
  "oha",
]);
console.log(carLexus);

carLexus.addLoadToBoot("Corn");
console.log(carLexus);
console.log("LOAD SPACE CONTENT", carLexus.loadSpaceContent)
