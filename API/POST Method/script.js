let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");

function getData() {
  url = "https://api.github.com/users";
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

//Use fetch Api
function postData() {
  url = "https://dummy.restapiexample.com/api/v1/create";
  data = '{"name": "tester", "salary": "123", "age": "23" }';
  params = {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: data
  }
  fetch(url, params).then(response => response.json())
    .then(data => console.log(data)
    )
};

postData();
