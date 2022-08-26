const intro = {
  firstName: "Sagar",
  lastName: "Tomar",
  birthYear: 2001,
  job: "Software Engineer",
  friends: ["Rakesh", "Shubh", "Rohit"],
  hasDriverLicense: true,

  calAge: function () {
    return 2022 - this.birthYear;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calAge()} year old ${
      intro.job
    }, and he has ${this.hasDriverLicense ? "a" : "No"} driver's license`;
  },
};

console.log(intro.calAge());
console.log(intro["calAge"]());

/* Challenge 2
Driver' license or not
 */
console.log(intro.getSummary());
