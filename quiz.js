const questions = [
  { text: "An email from your bank asks you to confirm your password via a link.", answer: "Phishing", image: "" },
  { text: "A text from a known company includes a link to track your package.", answer: "Legitimate", image: "" },
  // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const question = questions[currentQuestion];
  document.getElementById("question-number").textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  document.getElementById("score").textContent = `Score: ${score}`;
  document.getElementById("question-text").textContent = question.text;
  const img = document.getElementById("question-image");
  if (question.image) {
    img.src = question.image;
    img.classList.remove("hidden");
  } else {
    img.classList.add("hidden");
  }
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById("quiz-container").classList.add("hidden");
  document.getElementById("result-container").classList.remove("hidden");
  document.getElementById("final-score").textContent = `Your final score: ${score} out of ${questions.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("quiz-container").classList.remove("hidden");
  document.getElementById("result-container").classList.add("hidden");
  loadQuestion();
}

// Anti-tampering and anti-inspection measures
document.addEventListener("keydown", (e) => {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
    e.preventDefault();
    alert("Developer tools are disabled for security.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
  document.getElementById("option-legitimate").addEventListener("click", () => checkAnswer("Legitimate"));
  document.getElementById("option-phishing").addEventListener("click", () => checkAnswer("Phishing"));
  document.getElementById("next-button").addEventListener("click", () => {
    if (currentQuestion < questions.length) {
      loadQuestion();
    }
  });
  document.getElementById("restart-button").addEventListener("click", restartQuiz);

  // Detect DOM tampering
  const observer = new MutationObserver(() => {
    if (document.getElementById("quiz-container").innerHTML !== document.getElementById("quiz-container").innerHTML) {
      alert("Tampering detected! Quiz will reset.");
      restartQuiz();
    }
  });
  observer.observe(document.getElementById("quiz-container"), { childList: true, subtree: true });

  // Anti-debugging: Check if dev tools are open
  setInterval(() => {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;
    if (widthThreshold || heightThreshold) {
      alert("Developer tools detected! Please close them to continue.");
    }
  }, 1000);
});

// Store quiz state in sessionStorage
sessionStorage.setItem("quizState", JSON.stringify({ currentQuestion, score }));
