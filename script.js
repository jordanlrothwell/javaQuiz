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

var questionEl = document.getElementById("question");
var optionsEl = document.getElementById("options");
var optionListEl = document.getElementById("optionList");
const startButton = document.querySelector("button");

const question1 = {
    question: "is this a functioning object?",
    options: ["yes", "no", "ayeeeeeee"],
    correct: 0
}

const question2 = {
    question: "how about this one",
    options: ["yeeeeees", "noooooooooo"],
    correct: 0
}

questionEl.textContent = question1.question

let questionAppender = function(chosenQuestion) {
    for (var i = 0; i < chosenQuestion.options.length; i++) {
        var newListElement = document.createElement("li");
        var optionText = document.createTextNode(chosenQuestion.options[i]);
        newListElement.appendChild(optionText);
        document.getElementById("optionList").appendChild(newListElement)
    }
}

startButton.addEventListener("click", function(){
    questionAppender(question1);
})

questionAppender(question2)