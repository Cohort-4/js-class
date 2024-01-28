const descriptionPara = document.getElementById("para");
console.log(descriptionPara);
const secondPara = document.getElementById("second-para");

const isRaining = true;

if (isRaining) {
  descriptionPara.textContent = "Get an umbrella";
  // console.log("Get an umbrella");
} else {
  descriptionPara.textContent = "I will stay at home";

  // console.log("I will stay at home");
}

// Tenary operator
const myName = "Alimi Kehinde Mosafejo";
const lengthOfMyName = myName.length;
console.log(lengthOfMyName);
// console.log(7 % 2)

lengthOfMyName % 2 == 0
  ? (secondPara.textContent = "HELLO")
  : (secondPara.textContent = "HI");

// condition ? "do something" : "do another thing"

const list = document.getElementById("lists");
console.log(list);
list.style.backgroundColor = "red";
list.style.padding = "2rem";
list.style.color = "white";
list.style.fontFamily = "Roboto";
list.style.listStyle = "none";

// get with tag name

const inputFields = document.getElementsByTagName("input");
console.log(inputFields);
inputFields[0].setAttribute("placeholder", "Enter firstname");
inputFields[1].setAttribute("placeholder", "Enter email address");
inputFields[2].setAttribute("placeholder", "Enter password");

// get with querySelector()
const getDivs = document.querySelector("#para");
console.log(getDivs);
const getThirdPara = document.querySelector(".para-three");

console.log(getThirdPara);

// get with querySelectorAll()

const getAllParagraph = document.querySelectorAll("p");
console.log(getAllParagraph);
console.log(getAllParagraph.length);

// Event

const changeColor = document.getElementById("change-color");
const btn = document.getElementById("btn")
changeColor.style.backgroundColor = "blue";
changeColor.style.color = "white";
changeColor.style.padding = "2rem";

btn.style.cursor = "pointer";
// function to change background
const changeBackground = () => {
  changeColor.style.backgroundColor = "orange";
};

btn.addEventListener("click", changeBackground);
