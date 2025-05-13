var currentQuestion = 0;
var score = 0;
var totalQuestions = 10;
var currentQuestions = [];

function getRandomQuestions(questions) {
  var easyQuestions = questions.filter(function(q) { return q.difficulty === 'Easy'; });
  var mediumQuestions = questions.filter(function(q) { return q.difficulty === 'Medium'; });
  var hardQuestions = questions.filter(function(q) { return q.difficulty === 'Hard'; });
  var extremelyDifficultQuestions = questions.filter(function(q) { return q.difficulty === 'Extremely Difficult'; });

  var easySelection = shuffle(easyQuestions).slice(0, 2);
  var extremelyDifficultSelection = shuffle(extremelyDifficultQuestions).slice(0, 3);
  var mediumHardQuestions = mediumQuestions.concat(hardQuestions);
  var mediumHardSelection = shuffle(mediumHardQuestions).slice(0, 5);

  return shuffle(easySelection.concat(extremelyDifficultSelection, mediumHardSelection));
}

function loadQuestion() {
  var question = currentQuestions[currentQuestion];
  document.getElementById('current-question').textContent = currentQuestion + 1;
  document.getElementById('total-questions').textContent = totalQuestions;
  document.getElementById('sender').textContent = question.sender;
  document.getElementById('subject').textContent = question.subject;
  document.getElementById('message-body').innerHTML = question.body;
  document.getElementById('progress-bar').style.width = ((currentQuestion + 1) / totalQuestions * 100) + '%';

  var messageDisplay = document.getElementById('message-display');
  if (question.type === 'sms') {
    messageDisplay.classList.add('max-w-[80vw]', 'sm:max-w-sm', 'mx-auto', 'bg-gray-50', 'border-2', 'border-gray-400');
    messageDisplay.classList.remove('border-gray-300');
  } else {
    messageDisplay.classList.remove('max-w-[80vw]', 'sm:max-w-sm', 'mx-auto', 'bg-gray-50', 'border-2', 'border-gray-400');
    messageDisplay.classList.add('border-gray-300');
  }
}

function showFeedback(isCorrect, feedback) {
  var modal = document.getElementById('feedback-modal');
  var title = document.getElementById('feedback-title');
  var message = document.getElementById('feedback-message');
  title.textContent = isCorrect ? 'Correct!' : 'Incorrect';
  title.className = isCorrect ? 'text-green-600 text-lg sm:text-xl font-bold mb-4' : 'text-red-600 text-lg sm:text-xl font-bold mb-4';
  message.textContent = feedback;
  modal.classList.remove('hidden');
}

function showResults() {
  document.getElementById('quiz-container').classList.add('hidden');
  document.getElementById('results-container').classList.remove('hidden');
  document.getElementById('final-score').textContent = score;
  var resultsMessage = document.getElementById('results-message');
  if (score >= 8) {
    resultsMessage.textContent = 'Excellent job! You’re well-equipped to spot phishing attempts. Keep practicing to stay sharp.';
  } else if (score >= 5) {
    resultsMessage.textContent = 'Good effort! You caught some phishing attempts, but review the feedback to improve your skills.';
  } else {
    resultsMessage.textContent = 'Phishing can be tricky! Study the feedback and try again to sharpen your detection skills.';
  }
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  currentQuestions = getRandomQuestions(window.questions);
  document.getElementById('score').textContent = score;
  document.getElementById('quiz-container').classList.remove('hidden');
  document.getElementById('results-container').classList.add('hidden');
  loadQuestion();
}

// Initialize Quiz
document.addEventListener('DOMContentLoaded', function() {
  if (!window.questions) {
    alert('Error: Questions not loaded. Please ensure questions.js is included.');
    return;
  }
  currentQuestions = getRandomQuestions(window.questions);
  loadQuestion();

  // Event Listeners
  document.getElementById('legitimate-btn').addEventListener('click', function() {
    var question = currentQuestions[currentQuestion];
    var isCorrect = !question.isPhishing;
    if (isCorrect) score++;
    document.getElementById('score').textContent = score;
    showFeedback(isCorrect, question.feedback);
  });

  document.getElementById('phishing-btn').addEventListener('click', function() {
    var question = currentQuestions[currentQuestion];
    var isCorrect = question.isPhishing;
    if (isCorrect) score++;
    document.getElementById('score').textContent = score;
    showFeedback(isCorrect, question.feedback);
  });

  document.getElementById('next-btn').addEventListener('click', function() {
    document.getElementById('feedback-modal').classList.add('hidden');
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
      loadQuestion();
    } else {
      showResults();
    }
  });

  document.getElementById('restart-btn').addEventListener('click', resetQuiz);
});
