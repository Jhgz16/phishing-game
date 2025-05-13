let currentQuestion = 0;
let score = 0;
let questions = [];

document.addEventListener('DOMContentLoaded', () => {
  loadQuestions();
});

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById('quiz').classList.remove('hidden');
  document.getElementById('result').classList.add('hidden');
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestion];
  document.getElementById('question-number').textContent = currentQuestion + 1;
  document.getElementById('score').textContent = score;
  document.getElementById('question-text').textContent = question.text;
  document.getElementById('feedback').classList.add('hidden');
  document.getElementById('next-btn').classList.add('hidden');
  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach(btn => {
    btn.disabled = false;
    btn.style.backgroundColor = '';
  });
}

function handleAnswer(answer) {
  const question = questions[currentQuestion];
  const feedback = document.getElementById('feedback');
  const isCorrect = answer === question.correct;
  if (isCorrect) {
    score++;
    feedback.textContent = `Correct! ${question.explanation}`;
  } else {
    feedback.textContent = `Incorrect. ${question.explanation}`;
  }
  feedback.classList.remove('hidden');
  document.getElementById('score').textContent = score;
  document.getElementById('next-btn').classList.remove('hidden');
  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.answer === question.correct) {
      btn.style.backgroundColor = '#28a745';
    } else if (btn.dataset.answer === answer) {
      btn.style.backgroundColor = '#dc3545';
    }
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('result').classList.remove('hidden');
  document.getElementById('final-score').textContent = score;
}

document.querySelectorAll('.answer-btn').forEach(btn => {
  btn.addEventListener('click', () => handleAnswer(btn.dataset.answer));
});

document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('restart-btn').addEventListener('click', startQuiz);