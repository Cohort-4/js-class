/**
 * Async Wait (async...await)
 * Async Wait is an ES8 syntax which is used to
 * handle asynchronous actions. Asynchronous actions
 * are actions we can wait on while moving on to other tasks.
 * An example of asynchronous actions are 
 * 1. Making request to a network
 * 2. Querying a database
 * 3. Or fetching data from an API, e. t. c
 * JavaScript is non-blocking: instead of stopping the execution of code 
 * while it waits, JavaScript uses an event-loop which allows it to 
 * efficiently execute other tasks while it awaits the completion of 
 * these asynchronous actions.
 */

/**
 * How to write a async function
 * This is usually done by prepending/attaching 
 * the async Keyword to a function.
 * async functions always return a promise.
 * Illustration
 */

// illustration 1
async function funcName(){

}
funcName();


// illustration 2

const getData = async() => {

}
getData()


let apirUrl = "https://fakestoreapi.com/users";
// fetch api
// axios




