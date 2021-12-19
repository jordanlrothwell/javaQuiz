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

var multipleChoiceQuestion = document.getElementById("question");
var multipleChoiceAnswer = document.getElementById("answer");


const question1 = {
    question: "is this a functioning object?",
    answers: ["yes", "no"],
    correct: 0
}

multipleChoiceQuestion.textContent = question1.question

multipleChoiceAnswer.textContent = question1.answers