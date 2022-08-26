/*Dot VS. Bracket Notation
 */

//Dot
const intro = {
  firstName: "Sagar",
  lastName: "Tomar",
  age: 2022 - 2001,
  job: "Software Engineer",
  friends: ["Rakesh", "Shubh", "Rohit"],
};
console.log(intro);

console.log(intro.firstName);
console.log(intro.lastName);

//Bracket Notation
console.log(intro["firstName"]);
console.log(intro["lastName"]);

const nameKey = "Name";
console.log(intro["first" + nameKey]);
// add the:- firstName and print from intro
console.log(intro["last" + nameKey]);

const ageKey = "e";
console.log(intro["ag" + ageKey]);

//Add new properties in objects
intro.location = "Ghaziabad";
intro["twitter"] = "Sagar Tomar";
console.log(intro);

/* Challenge1:
Sagar has 3 frineds and his best friend is called Rakesh
*/
console.log(`${intro.firstName} has ${intro.friends.length} friends, and his best friend is called ${intro.friends[0]}`);
