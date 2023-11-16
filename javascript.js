const buttonQuestion1 = document.querySelector('[data-js="answer-button"]');
const buttonQuestion2 = document.querySelector('[data-js="answer-button2"]');
const buttonQuestion3 = document.querySelector('[data-js="answer-button3"]');
// const button = document.querySelectorAll;

// button.addEventListener("click", () => {
//   console.log("Yeah");
// });

buttonQuestion1.addEventListener("click", () => {
  document.querySelector(".Answer1").style.display = "block";
});

buttonQuestion2.addEventListener("click", () => {
  document.querySelector(".Answer2").style.display = "block";
});

buttonQuestion3.addEventListener("click", () => {
  document.querySelector(".Answer3").style.display = "block";
});
