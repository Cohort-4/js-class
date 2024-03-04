/**
 * BOM
 * window
 * - window.location.href
 * - window.alert()
 * - window.confirm()
 * - window
 * check other method after running on the browser
 */
// window.location.href = "/login"
// window.location.href = "/dashboard"


/**
 * DOM
 * document
 */
console.log(document)
console.log(document.title);
document.title = "THE DOM"
console.log(document.title);
console.log(document.body);
console.log(document.body.style.backgroundColor = "#efefef");


let p = document.getElementById("para")
let button = document.getElementById("btn") 

button.addEventListener("click", ()=> {
  p.innerHTML = "hello window"
  p.style.fontSize = "1.5rem"
})