// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// Start button

// Timer
// Lose time if answer incorrect

// Questions
// Multiple choice
// Random
// Content = javascript

// Score
// Persists between sessions

// PLACEHOLDER QUESTIONS

const question1 = {
  question: "this is the first question",
  options: ["this is option 1", "this is option 2"],
  answer: 0,
};

const question2 = {
  question: "this is the second question",
  options: ["this is option 2.1", "this is option 2.2", "this is option 2.3"],
  answer: 1,
};

const question3 = {
  question: "this is the third question",
  options: [
    "this is option 3.1",
    "this is option 3.2",
    "this is option 3.3",
    "this is option 3.4",
  ],
  answer: 2,
};

const question4 = {
  question: "this is the fourth question",
  options: [
    "this is option 4.1",
    "this is option 4.2",
    "this is option 4.3",
    "this is option 4.4",
    "this is option 4.5",
  ],
  answer: 3,
};

const questions = [question1, question2, question3, question4];

// Getting elements from the doc
var questionEl = document.getElementById("question");
var optionsEl = document.getElementById("options");
var optionListEl = document.getElementById("optionList");
const startButton = document.getElementById("button1");
const incrementButton = document.getElementById("button2");
var timerEl = document.getElementById("timer");
var timer2El = document.getElementById("timer2");

// Arrays to keep track of current question + make sure we choose new questions
var alreadyChosen = [];
var currentQuestion = [];
var yetToBeChosen = [];

// Stores the index of the currently selected option
var selectedOption;

// Store the score
var currentScore = 0;
var howManyQuestions = 0;

// Changes
var difficulty = {
  moreTimeForCorrect: 5,
  lessTimeForIncorrect: -5,
  defaultTime: 60,
  defaultBreakTime: 3,
};

// Initialise array of indexes for every question in our question bank
var initialiseYetToBeChosen = function () {
  for (var i = 0; i < questions.length; i++) {
    yetToBeChosen = yetToBeChosen.concat(i);
  }
};

// Function to choose index for given array
var chooseRandom = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

initialiseYetToBeChosen();

// Moves indexes between arrays
var unseenQuestion = function () {
  var choice = chooseRandom(yetToBeChosen);
  if (currentQuestion.length !== 0) {
    alreadyChosen.push(currentQuestion[0]);
  }
  if (yetToBeChosen === 0) {
    return;
  }
  currentQuestion.pop();
  currentQuestion.push(yetToBeChosen[choice]);
  yetToBeChosen.splice(choice, 1);
};

// Set the question text content
var setText = function (Q) {
  questionEl.textContent = questions[Q].question;
};

// Set the options text content
var setOptionsText = function (Q) {
  for (var i = 0; i < questions[Q].options.length; i++) {
    var newListElement = document.createElement("li");
    var optionText = document.createTextNode(questions[Q].options[i]);
    newListElement.appendChild(optionText);
    document.getElementById("optionList").appendChild(newListElement);
    newListElement.addEventListener("click", function () {
      selectedOption = questions[currentQuestion].options.indexOf(
        this.textContent
      );
      if (answerChecker(currentQuestion)) {
        this.classList.add("correct");
        stopClock();
        changeTime(difficulty.moreTimeForCorrect);
        currentScore++;
        this.classList.add("post-question")
        nextQuestionComing();
      } else {
        this.classList.add("incorrect");
        stopClock();
        changeTime(difficulty.lessTimeForIncorrect);
        nextQuestionComing();
      }
    });
  }
};

// Clears the current options
var killAllChildren = function (parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

var nextQuestion = function () {
  startClock();
  unseenQuestion();
  setText(currentQuestion);
  killAllChildren(optionListEl);
  setOptionsText(currentQuestion);
  howManyQuestions++;
  rewindMiniClock();
};

// Starts quiz cycle on start button click
startButton.addEventListener("click", function () {
  nextQuestion();
});

// Timer declarations
var t = difficulty.defaultTime;
var t2 = 3;
var countdown;
var miniCountdown;

var rewindMiniClock = function () {
  t2 = difficulty.defaultBreakTime
}

// Starts the timer
var startClock = function () {
  countdown = setInterval(function () {
    if (t === 0) {
      clearInterval(countdown);
    }
    timerEl.textContent = t;
    t--;
  }, 1000);
};

// Starts miniCountdown between questions
var nextQuestionComing = function () {
  miniCountdown = setInterval(() => {
    if (t2 === 0) {
      clearInterval(miniCountdown);
      timer2El.textContent = "";
      nextQuestion();
    }
    timer2El.textContent = t2;
    t2--;
  }, 1000);
};

// Stops the countdown
var stopClock = function () {
  clearInterval(countdown);
};

// Adds or removes time from countdown
var changeTime = function (s) {
  t = t + s;
  timerEl.textContent = t;
};

// Check index of chosenOption against answer
var answerChecker = function (Q) {
  if (selectedOption === questions[Q].answer) {
    return true;
  } else {
    return false;
  }
};
