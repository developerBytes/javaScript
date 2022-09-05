const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

//Spread Operator : individually elements in array
console.log(...newArr);
console.log(...badNewArr);

//Join 2 Array
const menu = [...badNewArr, ...newArr];
console.log(menu);

//Iterables: array, string, maps, sets, not objects

const str = "Jonas";
const letters = [...str, " ", "S"];
//Expand string
console.log(letters);
console.log(...str);
