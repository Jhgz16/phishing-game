function loadQuestions() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', './questions.json', true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      questions = JSON.parse(xhr.responseText);
      startQuiz();
    } else {
      console.error('Failed to load questions. Ensure questions.json is in the correct directory.');
      alert('Error loading quiz questions. Please try again later.');
    }
  };
  xhr.onerror = function() {
    console.error('Network error while loading questions.');
    alert('Error loading quiz questions. Please check your connection.');
  };
  xhr.send();
}