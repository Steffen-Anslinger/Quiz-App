const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  event.target.reset();
  event.target.elements.your_question.focus();
});
/////////////
const questionInput = document.querySelector('[data-js="your_question"]');
const charactersLeftQuestion = document.querySelector(
  '[data-js="rem-characters-question"]'
);

questionInput.addEventListener("input", (event) => {
  charactersLeftQuestion.textContent = 150 - event.target.value.length;
});
/////////////
const answerInput = document.querySelector('[data-js="your_answer"]');
const charactersLeftAnswer = document.querySelector(
  '[data-js="rem-characters-answer"]'
);

answerInput.addEventListener("input", (event) => {
  charactersLeftAnswer.textContent = 150 - event.target.value.length;
});

// messageInput.addEventListener("input", (event) => {
//   charactersLeftQuestion.textContent = 150 - event.target.value.length;
//   charactersLeftAnswer.textContent = 150 - event.target.value.length;
// });
