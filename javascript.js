const buttonQuestion1 = document.querySelector('[data-js="answer-button"]');
const buttonQuestion2 = document.querySelector('[data-js="answer-button2"]');
const buttonQuestion3 = document.querySelector('[data-js="answer-button3"]');

// const button = document.querySelectorAll;

// button.addEventListener("click", () => {
//   console.log("Yeah");
// });

/* buttonQuestion1.addEventListener("click", () => {
  document.querySelector(".Answer1").style.display = "block";
}); */

buttonQuestion1.addEventListener("click", () => {
  const answer = document.querySelector(".Answer1");
  if (answer.style.display === "none") {
    answer.style.display = "block";
    buttonQuestion1.textContent = "Hide answer";
  } else {
    answer.style.display = "none";
    buttonQuestion1.textContent = "Show answer";
  }
});

buttonQuestion2.addEventListener("click", () => {
  document.querySelector(".Answer2").style.display = "block";
});

buttonQuestion3.addEventListener("click", () => {
  document.querySelector(".Answer3").style.display = "block";
});

const bookmarkButton = document.querySelector('[data-js="bookmark"]');

bookmarkButton.addEventListener("click", () =>
  bookmarkButton.classList.toggle("change_bookmark")
);
