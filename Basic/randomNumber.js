//Generate random number
const a = Math.random();
console.log(a);

//generate random string
const char =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()/";

function geneateString(length) {
  let result = " ";
  const characterslength = char.length;
  for (let i = 0; i < length; i++) {
    result += char.charAt(Math.floor(Math.random() * characterslength));
  }
  return result;
}
console.log(geneateString(8));

const results = Math.random().toString(36).substring(2, 10);
console.log(results);
