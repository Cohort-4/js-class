let {
  cookBeans,
  steamBroccoli,
  cookRice,
  bakeChicken,
} = require("./index");

const serveDinner = async () => {
  const vegetablePromise = steamBroccoli();
  const starchPromise = cookRice();
  const proteinPromise = bakeChicken();
  const sidePromise = cookBeans();
  console.log(
    `Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`
  );
};
serveDinner();
