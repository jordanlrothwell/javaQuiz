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
// TODO: Organise these somewhere else, preferably in a JSON file
var question1 = {
  question: "is this a functioning object?",
  options: ["yes", "no", "ayeeeeeee", "ducks"],
  correct: 0,
};

var question2 = {
  question: "how about this one",
  options: ["yeeeeees", "noooooooooo"],
  correct: 1,
};

var question3 = {
  question: "this is another question",
  options: ["boiiiiiiii", "noooooo", "my gawd"],
  correct: 2,
};

var question4 = {
  question: "is this the",
  options: ["real life", "thing i wanted to be doing today", "quickie mart"],
  correct: 1,
};

var questions = [question1, question2, question3, question4];

// Getting elements from the doc
var questionEl = document.getElementById("question");
var optionsEl = document.getElementById("options");
var optionListEl = document.getElementById("optionList");
const startButton = document.querySelector("button");
var timerEl = document.getElementById("timer");

var t = 60;

var alreadyChosen = [];
var currentQuestion = [];
var yetToBeChosen = [];

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

var setText = function(Q) {
    questionEl.textContent = questions[Q].question
}

var setOptionsText = function (Q) {
  for (var i = 0; i < Q.options.length; i++) {
    var newListElement = document.createElement("li");
    var optionText = document.createTextNode(Q.options[i]);
    newListElement.appendChild(optionText);
    document.getElementById("optionList").appendChild(newListElement);
  }
};

startButton.addEventListener("click", function()
{
    nextQuestion();
    console.log("alreadyChosen = " + alreadyChosen);
    console.log("currentQuestion = " + currentQuestion);
    console.log("yetToBeChosen = " + yetToBeChosen);
    setText(currentQuestion)
}) 