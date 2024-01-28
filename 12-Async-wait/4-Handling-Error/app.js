const cookBeanSouffle = require("./index");

// Write your code below:
async function hostDinnerParty() {
  try {
    const dinner = await cookBeanSouffle();
    console.log(`${dinner} is served!`);
  } catch (error) {
    console.log(error);
    console.log("Ordering a pizza!");
  }
}
hostDinnerParty();
