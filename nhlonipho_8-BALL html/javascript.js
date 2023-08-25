const form = document.querySelector('#question-form');
const input = document.querySelector('#question-input');
const response = document.querySelector('#response');
const ball = document.querySelector('.magic-8-ball');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const question = input.value.trim();
  if (!question) return;
  if (question.length > 50) {
    alert('Question must be 50 characters or less!');
    return;
  }
  ball.classList.add('shake-animation');
  setTimeout(() => {
    ball.classList.remove('shake-animation');
    const answers = ['Yes', 'No', 'Maybe', 'Absolutely Not', 'Ask Again Later', 'What do you mean by that'];
    const randomIndex = Math.floor(Math.random() * answers.length);
    response.textContent = answers[randomIndex];

  }, 500);
  input.value = '';
});
