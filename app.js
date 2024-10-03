// Sample questions for the quiz
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2,
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1,
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: ["Mark Twain", "Charles Dickens", "William Shakespeare", "Leo Tolstoy"],
        correct: 2,
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3,
    },

    {
        question: "What is famous food of indore",
        answers: ["poha", "cachori ", "samosa", "All of above"],
        correct: 1,
    },









];



let currentQuestionIndex = 0;
let score = 0;

// Elements
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

// Load the current question
function loadQuestion() {                       
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="radio" name="answer" id="answer${index}" value="${index}">
            <label for="answer${index}">${answer}</label>
        `;
        answersElement.appendChild(li);
    });
}

// Check answer and move to the next question
function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) return;

    const answerIndex = parseInt(selectedAnswer.value);
    if (answerIndex === questions[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Show the result at the end of the quiz
function showResult() {
    quiz.style.display = "none";
    resultElement.style.display = "block";
    scoreElement.textContent = `${score} / ${questions.length}`;
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.style.display = "none";
    quiz.style.display = "block";
    loadQuestion();
}

// Event listeners
nextButton.addEventListener("click", checkAnswer);
restartButton.addEventListener("click", restartQuiz);

// Load the first question
loadQuestion();
