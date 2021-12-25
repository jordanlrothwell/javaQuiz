const questions = [
  {question: "Why so JavaScript and Java have similar name?", options: ["JavaScript is a stripped-down version of Java","JavaScript\'s syntax is loosely based on Java\'s","They both originated on the island of Java","None of the above"],
  answer: 1},
  
  {question: "When a user views a page containing a JavaScript program, which machine actually executes the script?", options: ["The User\'s machine running a Web browser","The Web server","A central machine deep within Netscape\'s corporate offices","None of the above"],
  answer: 0},
  
  {question: "______ JavaScript is also called client-side JavaScript.", options: ["Microsoft","Navigator","LiveWire","Native"],
  answer: 1},
  
  {question: "__________ JavaScript is also called server-side JavaScript.", options: ["Microsoft","Navigator","LiveWire","Native"],
   answer: 2},
  
  {question: "What are variables used for in JavaScript Programs?", options: ["Storing numbers, dates, or other values","Varying randomly","Causing high-school algebra flashbacks","None of the above"],
   answer: 0},
  
  {question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.", options: ["Client-side","Server-side","Local","Native"],
   answer: 0},
  
  {question: "Which of the following can\'t be done with client-side JavaScript?", options: ["Validating a form","Sending a form\'s contents by email","Storing the form\'s contents to a database file on the server","None of the above"],
   answer: 2},
  
  {question: "Which of the following are capabilities of functions in JavaScript?", options: ["Return a value","Accept parameters and Return a value","Accept parameters","None of the above"],
   answer: 2},
  
  {question: "Which of the following is not a valid JavaScript variable name?", options: ["2names","_first_and_last_names","FirstAndLast","None of the above"],
   answer: 0},
  
  {question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.", options: ["<SCRIPT>","<BODY>","<HEAD>","<TITLE>"],
   answer: 0},
  
  {question: "How does JavaScript store dates in a date object?", options: ["The number of milliseconds since January 1st, 1970","The number of days since January 1st, 1900","The number of seconds since Netscape\'s public stock offering.","None of the above"],
   answer: 0},
  
  {question: "Which of the following attribute can hold the JavaScript version?", options: ["LANGUAGE","SCRIPT","VERSION","None of the above"],
   answer: 0},
  
  {question: "JavaScript entities start with _______ and end with _________.", options: ["Semicolon, colon","Semicolon, Ampersand","Ampersand, colon","Ampersand, semicolon"],
   answer: 3},
  
  {question: "Which of the following best describes JavaScript?", options: ["a low-level programming language.","a scripting language precompiled in the browser.","a compiled scripting language.","an object-oriented scripting language."],
   answer: 3},
  
  {question: "Choose the server-side JavaScript object?", options: ["FileUpLoad","Function","File","Date"],
  answer: 2},
   
  {question: "Choose the client-side JavaScript object?", options: ["Database","Cursor","Client","FileUpLoad"],
  answer: 3},
   
  {question: "Which of the following is not considered a JavaScript operator?", options: ["new","this","delete","typeof"],
   answer: 1},
  
  {question: "______method evaluates a string of JavaScript code in the context of the specified object.", options: ["Eval","ParseInt","ParseFloat","Efloat"],
   answer: 0},
  
  {question: "Which of the following event fires when the form element loses the focus: <button>, <input>, <label>, <select>, <textarea>?", options: ["onfocus","onblur","onclick","ondblclick"],
   answer: 1},
  
  {question: "The syntax of Eval is ________________", options: ["[objectName.]eval(numeriC.","[objectName.]eval(string)","[EvalName.]eval(string)","[EvalName.]eval(numeriC."],
  answer: 1},
  
  {question: "JavaScript is interpreted by _________", options: ["Client","Server","Object","None of the above"],
  answer: 0},
  
  {question: "Using _______ statement is how you test for a specific condition.", options: ["Select","If","Switch","For"],
   answer: 1},
  
  {question: "Which of the following is the structure of an if statement?", options: ["if (conditional expression is true) thenexecute this codeend if","if (conditional expression is true)execute this codeend if","if (conditional expression is true)   {then execute this code>->},","if (conditional expression is true) then {execute this code},"],
  answer: 2},
  
  {question: "How to create a Date object in JavaScript?", options: ["dateObjectName = new Date([parameters])","dateObjectName.new Date([parameters])","dateObjectName := new Date([parameters])","dateObjectName Date([parameters])"],
   answer: 0},
  
  {question: "The _______ method of an Array object adds and/or removes elements from an array.", options: ["Reverse","Shift","Slice","Splice"],
   answer: 3},
  
  {question: "To set up the window to capture all Click events, we use which of the following statement?", options: ["window.captureEvents(Event.CLICK);","window.handleEvents (Event.CLICK);","window.routeEvents(Event.CLICK );","window.raiseEvents(Event.CLICK );"],
   answer: 0},
  
  {question: "Which tag(s) can handle mouse events in Netscape?", options: ["<IMG>","<A>","<BR>","None of the above"],
   answer: 1},
  
  {question: "____________ is the tainted property of a window object.", options: ["Pathname","Protocol","Defaultstatus","Host"],
   answer: 2},
  
  {question: "To enable data tainting, the end user sets the _________ environment variable.", options: ["ENABLE_TAINT","MS_ENABLE_TAINT","NS_ENABLE_TAINT","ENABLE_TAINT_NS"],
   answer: 2},
  
  {question: "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.", options: ["a wrapper","a link","a cursor","a form"],
  answer: 0},
  
  {question: "When a JavaScript object is sent to Java, the runtime engine creates a Java wrapper of type ___________", options: ["ScriptObject","JSObject","JavaObject","Jobject"],
  answer: 1},
  
  {question: "_______ class provides an interface for invoking JavaScript methods and examining JavaScript properties.", options: ["ScriptObject","JSObject","JavaObject","Jobject"],
   answer: 1},
  
  {question: "_________ is a wrapped Java array, accessed from within JavaScript code.", options: ["JavaArray","JavaClass","JavaObject","JavaPackage"],
   answer: 0},
    
  {question: "A ________ object is a reference to one of the classes in a Java package, such as netscape.javascript .", options: ["JavaArray","JavaClass","JavaObject","JavaPackage"],
   answer: 1},
  
  {question: "The JavaScript exception is available to the Java code as an instance of __________", options: ["netscape.javascript.JSObject","netscape.javascript.JSException","netscape.plugin.JSException","None of the above"],
  answer: 1},
  
  {question: "The syntax of a blur method in a button object is ______________", options: ["Blur()","Blur(contrast)","Blur(value)","Blur(depth)"],
   answer: 0},
  
  {question: "The syntax of capture events method for document object is ______________", options: ["captureEvents()","captureEvents(args eventType)","captureEvents(eventType)","captureEvents(eventVal)"],
   answer: 2},
  
  {question: "The syntax of close method for document object is ______________", options: ["Close(doC.","Close(object)","Close(val)","Close()"],
  answer: 3},
  
  {question: "Is it possible to nest functions in JavaScript?", options: ["True","False"],
  answer: 0},
  
  {question: "Scripting language are", options: ["High Level Programming language","Assembly Level programming language","Machine level programming language"],
  answer: 0},
  
  {question: "Which best explains getSelection()?", options: ["Returns the VALUE of a selected OPTION.","Returns document.URL of the window in focus.","Returns the value of cursor-selected text","Returns the VALUE of a checked radio input."],
  answer: 2},
  
  {question: "Choose the client-side JavaScript object:", options: ["Database","Cursor","Client","FileUpLoad"],
  answer: 3},
  
  {question: "In JavaScript, Window.prompt() method return true or false value ?", options: ["False","True"],
  answer: 0},
]

// Getting elements from the doc
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const optionListEl = document.getElementById("optionList");
const startButton = document.getElementById("button1");
const restartButton = document.getElementById("button2");
const highScoreHeading = document.getElementById("highScoreHeading")
const highScoreBox = document.getElementById("highScores")
const timerText = document.getElementById("timerText");
const timerEl = document.getElementById("timer");
const scoreText = document.getElementById("scoreText");
const scoreEl = document.getElementById("score");
const mainEl = document.getElementById("main")
const questionBox = document.getElementsByClassName("questionBox")

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
  bonusTime: 0,
  penalty: -100,
  defaultTime: 60,
  defaultBreakTime: 0,
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
  revealFooterContent();
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
      timerEl.textContent = "0";
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
  } else {
    highScoreHeading.textContent = "Your score wasn't high enough for the leaderboard.";
    highScoreHeading.setAttribute("style", "display: block; font-weight: 300")
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
  highScoreHeading.textContent = "High Scores"
  highScoreHeading.setAttribute("style", "display: block")
}

const revealRestartButton = function () {
  restartButton.setAttribute("style", "display: block")
}

const revealFooterContent = function () {
  scoreText.classList.remove("hidden");
  timerText.classList.remove("hidden");
  timerEl.classList.remove("hidden");
  scoreEl.classList.remove("hidden");
}

const saveHighScore = function (currentScore, highScores) {
  revealHighScore();
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
    .map((currentScore) => `<li><span class="initials">${currentScore.name}:</span> <span class="finalScore">${currentScore.currentScore}</span>`)
    .join('');
}

const hideHighScoreHeading = function () {
  highScoreHeading.textContent = "";
}

restartButton.addEventListener("click", function () {
  restartButton.setAttribute("style", "display: none");
  alreadyChosen = [];
  currentQuestion = [];
  currentScore = 0;
  t = difficulty.defaultTime;
  killAllChildren(highScoreBox);
  hideHighScoreHeading();
  initialiseYetToBeChosen();
  nextQuestion();
})