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
  answer: 0
}

const question2 = {
  question: "this is the second question",
  options: ["this is option 2.1", "this is option 2.2", "this is option 2.3"],
  answer: 1
}

const question3 = {
  question: "this is the third question",
  options: ["this is option 3.1", "this is option 3.2", "this is option 3.3", "this is option 3.4"],
  answer: 2
}

const question4 = {
  question: "this is the fourth question",
  options: ["this is option 4.1", "this is option 4.2", "this is option 4.3", "this is option 4.4", "this is option 4.5"],
  answer: 4
}

const questions = [question1, question2, question3, question4]

// Getting elements from the doc
var questionEl = document.getElementById("question");
var optionsEl = document.getElementById("options");
var optionListEl = document.getElementById("optionList");
const startButton = document.getElementById("button1");
const incrementButton = document.getElementById("button2")
var timerEl = document.getElementById("timer");


// Arrays to keep track of current question + make sure we choose new questions
var alreadyChosen = [];
var currentQuestion = [];
var yetToBeChosen = [];

var selectedOptionText;

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
var nextQuestion = function () {
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
    selectedOptionText = (this.textContent)
  })
}};

// Clears the current options
var removeAllChildNodes = function (parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

// Starts quiz cycle on start button click
startButton.addEventListener("click", function () {
  nextQuestion();
  setText(currentQuestion);
  removeAllChildNodes(document.querySelector("ul"));
  setOptionsText(currentQuestion);
});

// Timer
var t = 5;
var countdown = setInterval(function() {
  if (t === 0) {
    clearInterval(countdown)
  }
  timerEl.textContent = t;
  t--;
}, 1000)