/*
const markMass=78, markHeight=1.69;
const johnMass=92, johnHeight=1.95;
*/
const markMass = 95,
  markHeight = 1.88;
const johnMass = 85,
  johnHeight = 1.76;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / (johnHeight * johnHeight);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
