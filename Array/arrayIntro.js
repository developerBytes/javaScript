let arr = ["name1", "name2", "name3", "name4"];
console.log(arr);
console.log(arr.length);

const years = new Array(1981, 1856, 1474, 2022);
console.log(years);
console.log(years[1]);
console.log(years.length);
console.log(years[years.length - 1]);

//change array or muttable
arr[2] = "Friend";
console.log(arr);

//change array
years[2] = 1000;
console.log(years);

const firstName = "Sagar";
const arr1 = ["sagar", "Developer", 2037 - 1991, years];
console.log(arr1[0], arr[1]);
console.log(arr1.length);
