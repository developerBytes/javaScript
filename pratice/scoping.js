"use strict";

function calAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 2000 && birthYear <= 2023) {
      const str = `oh, and you are a millenial ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = "Jonas";
calAge(2001);
