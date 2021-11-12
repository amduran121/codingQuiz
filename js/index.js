var questionsEl = document.getElementById("questions");
var scoresEl = document.getElementById("scores");
var timer = document.getElementById("time");
var startBtn = document.getElementById("start");
var choices = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var questionsTitle = document.getElementById("question-title");
var startScreen = document.getElementById("start-screen");
var feedbackEl = document.getElementById("feedback");

var time = questions.length * 5;
var timerId;
var currentQuestionIndex = 0;

function getQuestion() {
  console.log(questions);
  var currentQuestion = questions[currentQuestionIndex];
  questionsTitle.textContent = currentQuestion.question;
  choices.innerHTML = "";

  currentQuestion.choices.forEach(function (choice, i) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    //in order to style these buttons needs to set a class of choice in CSS
    choiceBtn.setAttribute("value", choice);
    choiceBtn.textContent = i + 1 + choice;
    choiceBtn.onclick = clicked;
    choices.appendChild(choiceBtn);
  });
}
function clicked() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 5;
    timer.textContent = time;
    feedbackEl.textContent = "Wrong Answer";
  } else {
    feedbackEl.textContent = "Correct Answer";
  }
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 3000);
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}

function startQuiz() {
  startScreen.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  timerId = setInterval(clock, 1000);
  timer.textContent = time;
  getQuestion();
}
//should end the questions and display the final results, also store the score in local storage...localStorage
function endQuiz() {
  questionsEl.innerHTML = "";
  time.innerHTML = "";

  var createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "End of Quiz!";

  questionsEl.appendChild(createH1);

  var createParagraph = document.createElement("p");
  createParagraph.setAttribute("id", "createParagraph");

  questionsEl.appendChild(createParagraph);

  //this should calculate the remaining time and converts it to score
  if (timerId >= 0) {
    var time = timerId;
    var createP2 = document.createElement("p");
    clearInterval(holdInterval);
    createParagraph.textContent = "Your final score is " + time;
    questionsEl.appendChild(createP2);
  }
}

function clock() {
  time--;
  timer.textContent = time;
  if (time <= 0) {
    clearInterval(timerId);
    endQuiz();
  }
}

startBtn.addEventListener("click", startQuiz);
