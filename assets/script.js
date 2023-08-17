var timerElement = document.getElementById('timer');
var timeLeft = 60;

function updateTimer() {
  timerElement.textContent = `Time left: ${timeLeft} seconds`;
  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
    console.log('Time is up! ');
    noTime();
  }
}
function noTime() {
  alert("Time is up!")
}

var startButton = document.getElementById('startButton');
var questionContainer = document.querySelector('.container');

let currentQuestionIndex = 0;

var container = document.getElementsByClassName('container');
var questionElement = document.querySelector('.questions');
var question1Element = document.getElementById('q1');
var question2Element = document.getElementById('q2');
var question3Element = document.getElementById('q3');
var question4Element = document.getElementById('q4');
var question5Element = document.getElementById('q5');

var firstChoicesSections = document.getElementById("first-choices")
var secondChoicesSections = document.getElementById("second-choices")
var thirdChoicesSections = document.getElementById("third-choices")
var fourthChoicesSections = document.getElementById("fourth-choices")
var fifthChoicesSections = document.getElementById("fifth-choices")

function handleIncorrectAnswer(selectedChoice) {
  const correctOptions = [
    "d) All of the above",
    "b) 105",
    "d) Float",
    "a) function",
    "c) To log messages to the browser console"
  ];

  if (!correctOptions.includes(selectedChoice)) {
    timeLeft -= 5;
    updateTimer();
    alert('Incorrect answer');
  }
}



function displayQuestion(questionNumber) {
  console.log("This is questionNumber: ", questionNumber)
  question1Element.style.display = 'none';
  question2Element.style.display = 'none';
  question3Element.style.display = 'none';
  question4Element.style.display = 'none';
  question5Element.style.display = 'none';

  if (questionNumber == 0) {
    question1Element.style.display = 'flex';
  } else if (questionNumber == 1) {
    question2Element.style.display = 'flex';
  } else if (questionNumber == 2) {
    question3Element.style.display = 'flex';
  } else if (questionNumber == 3) {
    question4Element.style.display = 'flex';
  } else if (questionNumber == 4) {
    question5Element.style.display = 'flex';
  }
}
  
var timerInterval;

startButton.addEventListener('click', function() {
  startButton.style.display = 'none';
  question1Element.style.display = 'flex';
  timerInterval = setInterval(updateTimer, 1000);
});

firstChoicesSections.addEventListener("click", (e)=> {handleSelection(e)})
secondChoicesSections.addEventListener("click", (e)=> {handleSelection(e)})
thirdChoicesSections.addEventListener("click", (e)=> {handleSelection(e)})
fourthChoicesSections.addEventListener("click", (e)=> {handleSelection(e)})
fifthChoicesSections.addEventListener("click", (e)=> {handleSelection(e)})

firstChoicesSections.addEventListener("click", (e) => {
  const selectedChoice = e.target.textContent;
  handleIncorrectAnswer(selectedChoice);
});
secondChoicesSections.addEventListener("click", (e) => {
  const selectedChoice = e.target.textContent;
  handleIncorrectAnswer(selectedChoice);
});
thirdChoicesSections.addEventListener("click", (e) => {
  const selectedChoice = e.target.textContent;
  handleIncorrectAnswer(selectedChoice);
});
fourthChoicesSections.addEventListener("click", (e) => {
  const selectedChoice = e.target.textContent;
  handleIncorrectAnswer(selectedChoice);
});
fifthChoicesSections.addEventListener("click", (e) => {
  const selectedChoice = e.target.textContent;
  handleIncorrectAnswer(selectedChoice);
});


function handleSelection(event) {
 console.log(currentQuestionIndex)
 console.log(event.target)
  // var currentQuestion = questions[currentQuestionIndex];
  // var selectedAnswer = document.querySelector('input[name="answer"]:checked');
   if (currentQuestionIndex < 4) {
      currentQuestionIndex++; // Increment after checking the answer
      displayQuestion(currentQuestionIndex);
    } else {
     clearInterval(timerInterval);
    }
  }