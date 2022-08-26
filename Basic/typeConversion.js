const inputYear = "1991";
console.log(Number(inputYear));
console.log(inputYear + 18);
//Convert string into int and add both
console.log(Number(inputYear) + 18);

//type coercion
console.log("I am " + 23 + " year old");
console.log(23 + 10 + 3); // 36
console.log("23" - "10" - 3); // 10
console.log("23" * "2"); //46

let n = "1" + 1; //11
n -= 1; //10
console.log(n); // 10

//truthy and Falsy Values
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean({})); //true
console.log(Boolean("")); //false

const money = 0; // 0 - false and 1 - true
if (money) {
  console.log("Don't spend all");
} else {
  console.log("You sholud get a job");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is Undefined");
}
