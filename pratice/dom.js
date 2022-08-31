let message = document.querySelector(".button");
message.addEventListener("click", inputMsg);

function inputMsg() {
  let name = prompt("Input Your Name");
  message.textContent = `Hello  ${name}`;
}
