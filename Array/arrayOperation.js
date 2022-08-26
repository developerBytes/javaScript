const friends = ["Name1", "Name2", "Name3"];

/*1. push() Method  - add values  in the end */
friends.push("jay");
console.log(friends);
console.log(friends.length);

/*2. unshift() Method  - add values in the starting
 */
friends.unshift("John");
console.log(friends);
console.log(friends.length);

/*3. pop() Method - remove values from last
 */
friends.pop(); //remove from last
console.log(friends);
console.log(friends.length);

/*4. shift() method - remove value from strting
 */
friends.shift(); //remove from first
console.log(friends);
console.log(friends.length);

/*5. indexof() Method - used to find the value in array [if find then (return 1) but not fnd (return -1)]
 */
console.log(friends.indexOf("Name2")); //1
console.log(friends.indexOf("sagar")); //-1

/*6. includes() method - used to find values and return true or false
 */
console.log(friends.includes("Name2"));
//true
console.log(friends.includes("sagar"));
//false

if (friends.includes("Name1")) {
  console.log("You have a friend");
} else {
  console.log("You have't friend");
}
