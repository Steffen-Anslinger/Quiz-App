const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const questionSection = document.createElement("section");
  questionSection.classList.add("question");
  questionSection.innerHTML = `
<section class="question__text">
    <h2>${data.your_question}</h2>
    <button
      aria-label="Bookmark question"
      class="question__bookmark"
      data-js="bookmark3"
    ></button>
    <button type="button" class="show__answer" data-js="answer-button3">
      Show answer
    </button>
    <p class="Answer3">
    ${data.your_answer}
    </p>
  </section>
  <section class="tag">
    <ul>
      <li>${data.your_tag}</li>
    </ul>
  </section>
</section>
`;
  form.insertAdjacentElement("afterend", questionSection);
  // document.body.append(questionSection);

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
