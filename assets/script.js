// #region Hide start button and show first question after click
const startButton = document.getElementById('startButton');
const questionContainer = document.querySelectorAll('.container')[0];

startButton.addEventListener('click', function() {
  startButton.style.display = 'none';
  questionContainer.style.display = 'block'; 
});
// #endregion

const container = document.getElementsByClassName('.container');
const questionElement = document.getElementsByClassName('.questions');
const option1Element = document.getElementById('q1');
const option2Element = document.getElementById('q2');
const option3Element = document.getElementById('q3');
const option4Element = document.getElementById('q4');

const questions = [
    {
      id: 'q1',
      question: 'What is the correct way to declare a variable in JavaScript?',
      options: ['a) var myVariable = 10', 'b) let myVariable = 10', 'c) const myVariable = 10', 'd) All of the above'],
      answer: 'd) All of the above'
    },
    {
      id: 'q2',
      question: 'What is the result of the following expression: 10 + "5"?',
      options: ['a) 15', 'b) 105', 'c) 10 + 5', 'd) TypeError'],
      answer: 'b) 105'
    },
    {
      id: 'q3',
      question: 'Which of the following is NOT a JavaScript data type?',
      options: ['a) String', 'b) Boolean', 'c) Array', 'd) Float'],
      answer: 'c) Array'
    },
    {
      id: 'q4',
      question: 'Which keyword is used to define a function in JavaScript?',
      options: ['a) function', 'b) def', 'c) func', 'd) define'],
      answer: 'c) func'
    },
    {
      id: 'q5',
      question: 'What is the purpose of the console.log() function in JavaScript?',
      options: ['a) To display an alert message', 'b) To write text on the web page', 'c) To log messages to the browser console', 'd) To execute a JavaScript function'],
      answer: 'c) To log messages to the browser console'
    }
  ];
  
  let currentQuestionIndex = 0;

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  option1Element.textContent = currentQuestion.options[0];
  option2Element.textContent = currentQuestion.options[1];
  option3Element.textContent = currentQuestion.options[2];
  option4Element.textContent = currentQuestion.options[3];
}

// Function to handle user selection
function handleSelection() {
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  
  if (selectedAnswer) {
    const selectedOptionIndex = Array.from(document.querySelectorAll('input[name="answer"]')).indexOf(selectedAnswer);
    
    if (selectedOptionIndex === currentQuestion.answer) {
      // Correct answer
      console.log('Correct!');
    } else {
      // Incorrect answer
      console.log('Incorrect!');
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      // All questions answered
      console.log('Quiz completed!');
    }
  }
}

// Add event listeners to the answer options
option1Element.addEventListener('change', handleSelection);
option2Element.addEventListener('change', handleSelection);
option3Element.addEventListener('change', handleSelection);
option4Element.addEventListener('change', handleSelection);
// Add event listeners for more option elements as needed

// Display the first question
displayQuestion();