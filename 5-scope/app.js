// Global Scoped Variable
let x = 22;
let y = 33;

const addNumber = () => {
  return x + y;
};
const addNumberResult = addNumber();
console.log("addNumberResult = ", addNumberResult);

const addAnotherNumber = () => {
  let z = 44;
  return x + y + z;
};
console.log("addAnotherNumber", addAnotherNumber());

// Local Scope Varaible

let multiplyNumber = () => {
  let p = 5;
  let q = 8;
  let r = 3;
  return p * q * r;
};
console.log(multiplyNumber());


const subtractNumber = () => {
  return q - r;
}
console.log(subtractNumber()); // ReferenceError: q is not defined