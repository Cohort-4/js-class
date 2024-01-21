let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber)
let registeredEarly = true;
let age = 18;
if (registeredEarly && age > 18) {
  raceNumber += 1000;
}
if (registeredEarly && age > 18) {
  console.log(
    `Registrants who are ${age} years old that registered early will have their race at 9:30 am with race number of ${raceNumber}`
  );
} else if (!registeredEarly && age > 18) {
  console.log(
    `Registrants who are ${age} years old that didn't register early will have their race at 11:00 am with race number of ${raceNumber}`
  );
} else if (age < 18) {
  console.log(
    `Youth registrants will have their race at 12:30 pm with race number of ${raceNumber}`
  );
} else {
  console.log(
    `Registrants of ${age} years old should see the registration desk.`
  );
}
