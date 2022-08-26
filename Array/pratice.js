let arr = ["name1", "name2", "name3", "name4", "name5"];
console.log(arr);
console.log(arr.length);

arr.push("new name");
console.log(arr);
console.log(arr.length);

arr.pop();
console.log(arr);
console.log(arr.length);

arr.unshift("John");
console.log(arr);
console.log(arr.length);

arr.shift();
console.log(arr);
console.log(arr.length);

console.log(arr.indexOf("John"));
console.log(arr.includes("name5"));
console.log(arr.length);
