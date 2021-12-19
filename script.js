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
  question: "oooooooooh",
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

var previousQuestionIndexes = [];
var currentQuestionIndex = [];
var remainingQuestionIndexes = [];

var initialiseRemainingQuestionIndexes = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        remainingQuestionIndexes = remainingQuestionIndexes.concat(i)
    }
}

var chooseNewIndex = function() {
    var newIndex = remainingQuestionIndexes[Math.floor(Math.random() * remainingQuestionIndexes)];
    var indexOfIndex = remainingQuestionIndexes.indexOf[newIndex];
    remainingQuestionIndexes.splice(indexOfIndex);
    currentQuestionIndex = currentQuestionIndex.concat(newIndex)
}

initialiseRemainingQuestionIndexes();
chooseNewIndex


// Defining functions

var chooseRandom = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

var setQuestionText = function (Q) {
  questionEl.textContent = Q.question;
};

var setOptionsText = function (Q) {
  for (var i = 0; i < Q.options.length; i++) {
    var newListElement = document.createElement("li");
    var optionText = document.createTextNode(Q.options[i]);
    newListElement.appendChild(optionText);
    document.getElementById("optionList").appendChild(newListElement);
  }
};
