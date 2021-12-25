const question1 = {
  question: "this is the first questionthis is the first questionthis is the first questionthis is the first questionthis is the first questionthis is the first question",
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
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const optionListEl = document.getElementById("optionList");
const startButton = document.getElementById("button1");
const restartButton = document.getElementById("button2");
const highScoreHeading = document.getElementById("highScoreHeading")
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const mainEl = document.getElementById("main")

// Arrays to keep track of current question + make sure we choose new questions
var alreadyChosen = [];
var currentQuestion = [];
var yetToBeChosen = [];

// Stores the index of the currently selected option
var selectedOption;

// Store the score
var currentScore = 0;
var playerInitials;

// Changes
var difficulty = {
  bonusTime: 5,
  penalty: -100,
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
        changeTime(difficulty.bonusTime);
        currentScore++;
        scoreEl.textContent = currentScore;
        rewindMiniClock();
        nextQuestionComing();
      } else {
        this.classList.add("incorrect");
        stopClock();
        if (t > Math.abs(difficulty.penalty)) {
          changeTime(difficulty.penalty);
          rewindMiniClock();
          nextQuestionComing();
        } else {
          gameOver();
        }
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
};

// Starts quiz cycle on start button click (and removes the button)
startButton.addEventListener("click", function () {
  startButton.remove();
  nextQuestion();
  timerEl.classList.remove("hidden");
  scoreEl.classList.remove("hidden");
});

// Timer declarations
var t = difficulty.defaultTime;
var t2;
var countdown;
var miniCountdown;

// Re-initialises the miniCountdown
var rewindMiniClock = function () {
  t2 = difficulty.defaultBreakTime;
};

// Starts the timer
var startClock = function () {
  timerEl.textContent = t;
  scoreEl.textContent = currentScore;
  countdown = setInterval(function () {
    t--;
    if (t !== 0) {
      timerEl.textContent = t;
      scoreEl.textContent = currentScore;
    } else {
      timerEl.textContent = "";
      clearInterval(countdown);
      gameOver();
    }
  }, 1000);
};

// Starts miniCountdown between questions
var nextQuestionComing = function () {
  miniCountdown = setInterval(() => {
    if (t2 > 0) {
    t2--;
    } else {
      clearInterval(miniCountdown);
      nextQuestion();
    }
  }, 1000);
};

// Stops the main countdown
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

// Put score into local storage if within top 10
const NO_OF_HIGH_SCORES = 10;
const HIGH_SCORES = 'highScores';
const highScoreString = localStorage.getItem(HIGH_SCORES);
const highScores = JSON.parse(highScoreString) ?? [];
var checkHighScore = function(currentScore) {
  const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
  const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.currentScore ?? 0;
  
  if (currentScore > lowestScore) {
    saveHighScore(currentScore, highScores);
    showHighScores();
  }
}

const gameOver = function () {
  stopClock();
  revealRestartButton();
  checkHighScore(currentScore);
  killAllChildren(questionEl);
  killAllChildren(optionListEl);
}

const revealHighScore = function () {
  highScoreHeading.setAttribute("style", "display: block")
}

const revealRestartButton = function () {
  restartButton.setAttribute("style", "display: block")
}

const saveHighScore = function (currentScore, highScores) {
  const name = prompt('You got a highscore! Enter name:');
  const newScore = { currentScore, name };

  highScores.push(newScore);
  highScores.sort((a, b) => b.currentScore - a.currentScore);
  highScores.splice(NO_OF_HIGH_SCORES);
  localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
}
  
const showHighScores = function () {
  const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
  const highScoreList = document.getElementById(HIGH_SCORES);
  
  highScoreList.innerHTML = highScores
    .map((currentScore) => `<li>${currentScore.currentScore} - ${currentScore.name}`)
    .join('');
}

const hideHighScores = function () {
  const highScoreList = document.getElementById(HIGH_SCORES);
  highScoreList.innerHTML = "";
}

restartButton.addEventListener("click", function () {
  restartButton.setAttribute("style", "display: none");
  alreadyChosen = [];
  currentQuestion = [];
  currentScore = 0;
  t = difficulty.defaultTime;
  hideHighScores();
  initialiseYetToBeChosen();
  nextQuestion();
})