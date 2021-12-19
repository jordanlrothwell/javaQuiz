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
    correct: 0
}

var question2 = {
    question: "how about this one",
    options: ["yeeeeees", "noooooooooo"],
    correct: 1
}

var questions = [question1, question2]

// Getting elements from the doc
var questionEl = document.getElementById("question");
var optionsEl = document.getElementById("options");
var optionListEl = document.getElementById("optionList");
const startButton = document.querySelector("button");
var timerEl = document.getElementById("timer")

var t = 60;

// Defining functions

var chooseRandom = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

var questionAppender = function(chosenQuestion) {
    for (var i = 0; i < chosenQuestion.options.length; i++) {
        var newListElement = document.createElement("li");
        var optionText = document.createTextNode(chosenQuestion.options[i]);
        newListElement.appendChild(optionText);
        document.getElementById("optionList").appendChild(newListElement)
    }
}

var presentQuestion = function() {
    var chosenQuestion = questions[Math.floor(Math.random() * (questions.length))]
    questionEl.textContent = chosenQuestion.question;
    questionAppender(chosenQuestion);
}

presentQuestion()