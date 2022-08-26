//function expression
const calAge = function (birthyear) {
  return 2022 - birthyear;
};

//Arrow Function
const calAge3 = (birthyear) => 2022 - birthyear;
const age3 = calAge3(2001);
console.log(age3);

const yearUntillRetriement = (birthyear, firstName) => {
  const age = 2022 - birthyear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearUntillRetriement(2001, "sagar"));
console.log(yearUntillRetriement(2012, "rakesh"));