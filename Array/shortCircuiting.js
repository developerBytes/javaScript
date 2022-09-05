//Use any data type, return any data type short-circuiting
console.log("----OR----");

console.log(1 || "Joans");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

console.log("----AND----");
console.log(1 && "Joans");
console.log("" && "Jonas");
console.log(true && 0);
console.log(undefined || null);
console.log(undefined && 0 && "" && "Hello" && 23 && null);
