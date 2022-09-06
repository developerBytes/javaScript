/*Api Key : 47c4e2a3b20344cca6cadfd6d009dd6d*/

//Initialize the news API parameters
let source = "country=us";
let apiKey = "47c4e2a3b20344cca6cadfd6d009dd6d";

//Grab the news Conatiner
let newsAccordion = document.getElementById("newsAccordion");

//Create an AJAX GET request
const xhr = new XMLHttpRequest();

//Use this for post request
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?${source}&apiKey=${apiKey}`,
  true
);

//What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;

    let newsHtml = "";
    articles.forEach(function (element, index) {
      for (let news in articles) {
        let news = `<div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                        ${element["title"]}
                        </button>
                    </h2>
                    <div id="collapse${index} class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                        <div class="accordion-body">
                        ${element["content"]} <a href="${element["url"]}" target="_blank">Read More</a>
                        </div>
                    </div>
                </div>
            `;
        newsHtml += news;
      }
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
  }
};

xhr.send();
