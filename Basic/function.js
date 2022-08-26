function logger() {
  console.log("My name is sagar");
}
//Calling / running / Invoking function
logger();

function add(a, b) {
  let sum = a + b;
  console.log(sum);
}
add(5, 10);
add(15, 10);
add(25, 10);
add(35, 10);
add(45, 10);

function fruitProcessor(apple, orange) {
  console.log(apple, orange);
  const juice = `Juice with ${apple} apple and ${orange} orange`;
  return juice;
}
const appleJuice = fruitProcessor(9, 10);
// or use
// console.log(fruitProcessor(5, 10));
console.log(appleJuice);
