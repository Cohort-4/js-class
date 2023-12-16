### Function

A function is a reusable block of code that combines 
some programming logic to perform a specific task.


```javascript
/**
 * Function Declaration
*/

function functionName() {
  // function body
}

/**
 * Calling a function or Invoking a function: This is done by writing 
 * the function name followed by parentheses.
*/

function functionName(param) {
  // function body
}
functionName();


/**
 * Parameter is a named variable expecting a value from the Argument.
 * The return keyword is used to return the result of the body of a function
*/

function functionName(parameter) {
  return some statements
}
functionName(arguments)

/**
 * example to calculate the area of a circle
*/

function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}
areaOfCircle(3);

/**
 * Function Expression
*/

const myFunctionName = function() {
  // function body
}
myFunctionName();

/**
 * Arrow Function (es6 way of declaring function)
*/

const myFunctionName = () => {
  // function body
}
myFunctionName();

/**
 * Printing out the result of a function
*/

const myFunctionName = () => {
 return some logic
}
console.log(myFunctionName());

```

