// const sayHello = (name) => {
//   return `Hello ${name}`;
// };
// console.log(sayHello("Kehinde"));

// let food = ["Bean", "Dodo", "Oha", "Amala"]

// const listFood = food.forEach((foodItem) => {
//   console.log(`I love eating ${foodItem}`)
// })

// select element by id
let button = document.getElementById("button");
// console.log(button);

let changeBackground = () => {
  button.style.background = "red";
  button.style.color = "black";
};

// changeBackground();

// select element by class
const myLists = document.getElementsByClassName("lists");
console.log(myLists);
let lengthOfElementHavingListAsClassName = myLists.length;

console.log(lengthOfElementHavingListAsClassName);
console.log(myLists.item(0));
console.log(myLists.item(1));
// console.log(myLists.namedItem(myLists[0]));

// select element by class
let SomeLists = document.getElementsByClassName("list-item");
console.log(SomeLists);
SomeLists[0].innerHTML = "Beans";
SomeLists[1].innerHTML = "Banana";
SomeLists[2].innerHTML = "Plantain";
SomeLists[3].innerHTML = "Onions";

// select element by class
let SomeItems = document.getElementsByClassName("item");
SomeItems[0].textContent = "Oha";
SomeItems[1].textContent = "Fufu";
SomeItems[2].textContent = "Okra";

// select element by class name

let anotherLists = document.getElementsByClassName("list");
console.log(anotherLists);

anotherLists[0].innerText = "Mango";
anotherLists[1].innerText = "Cassava";
anotherLists[2].innerText = "Orange";
anotherLists[3].innerText = "Pineapple";

// 1. Difference between innerHTML, textContent and innerText
// 2. create a parent list and at least 5 children with the same class name and manipulate each child of the parent list
// 3. create a button with a text 'send me' and apply the necessary button stylying to it Example, border, padding, border-radius, bg, and add onclick event to the button

// get element bu tag name

let myParagraphs = document.getElementsByTagName("p");
console.log(myParagraphs);
myParagraphs[0].style.color = "rebeccapurple";
myParagraphs[0].style.fontSize = "2rem";

myParagraphs[1].style.color = "dodgerblue";
myParagraphs[1].style.fontSize = "2rem";

myParagraphs[2].style.color = "orange";
myParagraphs[2].style.fontSize = "2rem";

myParagraphs[3].style.color = "red";
myParagraphs[3].style.fontSize = "2rem";

// select element by querySelector()

let myContent = document.querySelector("#mycontent");
console.log(myContent);
myContent.innerHTML = "My first content on JavaScript";

let myDetails = document.querySelector(".my-details");
console.log(myDetails);

// select element by querySelectorAll()

let myNote = document.querySelectorAll(".my-note");
console.log(myNote);

// solution to question 3
let sendMe = document.getElementById("send-me");
sendMe.style.border = "none";
sendMe.style.padding = "15px 30px";
sendMe.style.backgroundColor = "#111111";
sendMe.style.color = "#ffffff";
sendMe.style.borderRadius = "8px";
sendMe.style.fontSize = "1.5rem";
sendMe.style.cursor = "pointer";
sendMe.style.fontWeight = "bolder";

// set show password
let password = document.getElementById("password");
let eye = document.getElementById("eye");

const hideAndShow = () => {
  if (password.type === "password") {
    password.type = "text";
    eye.src = "./eye-open.png";
  } else {
    password.type = "password";
    eye.src = "./eye-close.png";
  }
  console.log("hello");
};
// hideAndShow();
