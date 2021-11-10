var questionsEl = document.getElementById("questions");
var scoresEl = document.getElementById("scores");
var timer = document.getElementById("time");
var startBtn = document.getElementById("start");
var choices = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var questionsTitle = document.getElementById("question-title");
var startScreen = document.getElementById("start-screen");
var feedbackEl = document.getElementById("feedback");

var time = questions.length * 15;
var timerId;

function startQuiz() {
  startScreen.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  timerId = setInterval(clock, 1000);
  timer.textContent = time;
  // getQuestion()
}

function clock() {
  time--;
  timer.textContent = time;
  if (time <= 0) {
    // endQuiz()
  }
}

startBtn.addEventListener("click", startQuiz);
