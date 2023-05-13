const faqAccordion = document.querySelector('.accordion');
const collapses = faqAccordion.querySelectorAll('.accordion-container');

collapses.forEach((collapse) => {
  const question = collapse.querySelector('.accordion-question');
  const answer = collapse.querySelector('.accordion-answer');

  question.addEventListener('click', () => {
    question.classList.toggle('boldtxt');
    answer.classList.toggle('showanswer');
  });
});
