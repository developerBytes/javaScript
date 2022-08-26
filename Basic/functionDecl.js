function calAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calAge1(2001);
console.log(age1);

const calAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calAge2(2002);
console.log(age2);
