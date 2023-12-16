### Scope in JavaScript

Scope is a concept in programming that some variables are available or unavailable from other parts of a program.

Global Scope and Local Scope
A variable available in every part of the program is called a Global Scope variable
whereas, a variable that is available within a block { } is known as Local Scope Variable.

Example of Global variable

```javascript
let firstName = "John";
let lastName = "Doe";
let middleName = "Terresa";

const myFullName = () => {
  return `My names are ${firstName.toUpperCase()}, ${lastName} ${middleName}`;
}
console.log(myFullName()) // JOHN, Doe Terresa

Which implies all the three variable are accessible in the function myFullName()
because the variables are decleared globally
```



Example of Local variable

```javascript

const welcomeMsg = () => {
  let firstName = "John";
  let lastName = "Doe";
  return `You are welcome Mr ${firstName.toUpperCase()}, ${lastName}`;
}


Which implies all the three variable are accessible in the function welcomeMsg()
because the variables are decleared locally
```
