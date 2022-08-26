const markMass = 95,
  markHeight = 1.88;
const johnMass = 85,
  johnHeight = 1.76;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / (johnHeight * johnHeight);
const markHigherBMI = BMIMark < BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
if (markHigherBMI) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's");
}

if (markHigherBMI) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's!`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's`);
}
