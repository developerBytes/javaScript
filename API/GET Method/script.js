let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

//Use fetch Api
function getData() {
  url = "data.txt";
  fetch(url)
    .then((response) => {
      console.log("Inside First then");
      return response.text();
    })
    .then((data) => {
      console.log("Inside Second then");
      console.log(data);
    });
}

console.log("Before Running get data");
getData();
console.log("After Running get data");
