const firstname = "Jonas";
const job = "developer";
const birthYear = 1991;
const year = 2037;

const joans =
  "I'm " + firstname + ",a " + (year - birthYear) + "years old " + job + "!";
console.log(joans);

//Template Literals ``
const joansnew = `I'm ${firstname}, a ${year - birthYear} year old ${job}!`;
console.log(joansnew);
console.log(`Just start AI`);
console.log("String with \nNew Line");
