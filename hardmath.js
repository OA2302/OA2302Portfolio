const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option');
const resultElement = document.getElementById('result');
const progressBar = document.getElementById('progress-bar');


const hardMathQuestions = [
    {
        question: "Solve the differential equation: dy/dx = 2x - 1",
        options: ["y = x^2 - x + C", "y = x^2 + x + C", "y = x^2 - x + 2C", "y = x^2 + x + 2C"],
        correctAnswer: "y = x^2 - x + C"
    },
    {
        question: "Find the limit as x approaches 0 of (sin(x) / x).",
        options: ["1", "0", "π", "Undefined"],
        correctAnswer: "1"
    },
    {
        question: "What is the smallest positive integer that is evenly divisible by all integers from 1 to 10?",
        options: ["120", "180", "210", "252"],
        correctAnswer: "252"
    },
    {
        question: "Solve the equation: 3^x = 27",
        options: ["x = 1", "x = 2", "x = 3", "x = 4"],
        correctAnswer: "x = 3"
    },
    {
        question: "Find the value of the Riemann zeta function at s = 2. It is denoted as ζ(2) and is equal to π^2/6.",
        options: ["π", "π^2/6", "π^2/4", "2π"],
        correctAnswer: "π^2/6"
    },
    {
        question: "What is the result of the integral of e^x from 0 to 1?",
        options: ["0", "1", "e - 1", "e"],
        correctAnswer: "e - 1"
    },
    {
        question: "Calculate the derivative of ln(x^2) with respect to x.",
        options: ["1", "2/x", "2x", "x^2"],
        correctAnswer: "2/x"
    },
    {
        question: "Simplify the expression: √(2 + √3) * √(2 - √3).",
        options: ["1", "2", "√2", "3"],
        correctAnswer: "1"
    },
    {
        question: "Find the derivative of the function f(x) = x^4 - 3x^2 + 2x - 1.",
        options: ["4x^3 - 6x + 2", "4x^3 - 6x^2 + 2x", "x^4 - 3x^2 + 2x", "4x^3 - 3x^2 + 2"],
        correctAnswer: "4x^3 - 6x^2 + 2"
    },
    {
        question: "What is the solution to the equation: 2^(x-1) = 8?",
        options: ["x = 2", "x = 3", "x = 4", "x = 5"],
        correctAnswer: "x = 4"
    },
    {
        question: "Solve the equation for x: 3x^2 - 7x + 2 = 0",
        options: ["x = 2/3 or x = 1/2", "x = 1/3 or x = 2", "x = 1 or x = 2/3", "x = 2 or x = 1/2"],
        correctAnswer: "x = 2/3 or x = 1/2"
    },
    {
        question: "What is the value of the infinite series: 1 + 1/2 + 1/4 + 1/8 + ...?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2"
    },
    {
        question: "Calculate the derivative of sin(x) + cos(x).",
        options: ["sin(x) + cos(x)", "cos(x) - sin(x)", "2sin(x)", "2cos(x)"],
        correctAnswer: "cos(x) - sin(x)"
    },
    {
        question: "Simplify the expression: (2x^3 + 3x^2 - 4x) / x",
        options: ["2x^2 + 3x - 4", "2x^2 + 3x + 4", "2x^3 + 3x^2 - 4", "2x^3 + 3x^2 + 4"],
        correctAnswer: "2x^2 + 3x - 4"
    },
    {
        question: "What is the value of the integral from 0 to π/2 of sin(x) dx?",
        options: ["0", "1", "π/2", "2"],
        correctAnswer: "1"
    },
    {
        question: "Find the real roots of the equation: x^3 - 6x^2 + 11x - 6 = 0",
        options: ["x = 1, x = 2, x = 3", "x = 1, x = 3, x = 4", "x = 2, x = 4, x = 5", "x = 2, x = 3, x = 6"],
        correctAnswer: "x = 1, x = 2, x = 3"
    },
    {
        question: "Solve for x: log2(x) = 3",
        options: ["x = 2", "x = 4", "x = 6", "x = 8"],
        correctAnswer: "x = 8"
    },
    {
        question: "What is the value of the Maclaurin series expansion of e^x at x = 0?",
        options: ["e^x", "x + 1", "1 - x", "1 + x"],
        correctAnswer: "1 + x"
    },
    {
        question: "If a triangle has sides of length 7, 24, and 25, what type of triangle is it?",
        options: ["Equilateral", "Isosceles", "Scalene", "Right Triangle"],
        correctAnswer: "Right Triangle"
    },
    {
        question: "Solve for x: 2^(2x) = 32",
        options: ["x = 1", "x = 2", "x = 3", "x = 4"],
        correctAnswer: "x = 2"
    },
    {
        question: "Find the value of the integral from 0 to 1 of x^2 dx.",
        options: ["1/4", "1/3", "1/2", "1"],
        correctAnswer: "1/3"
    },
    {
        question: "Calculate the derivative of cos(x) + sin(2x).",
        options: ["-sin(x) + 2cos(2x)", "-sin(x) + 2cos(x)", "cos(x) - 2sin(2x)", "cos(x) + 2sin(2x)"],
        correctAnswer: "-sin(x) + 2cos(x)"
    },
    {
        question: "Simplify the expression: (x^4 - 1) / (x^2 - 1).",
        options: ["x^2 + 1", "x^2 - 1", "x^2", "x^2 + 2"],
        correctAnswer: "x^2 + 1"
    },
    {
        question: "What is the value of the integral from 0 to π of sin(2x) dx?",
        options: ["0", "1", "π/2", "2"],
        correctAnswer: "0"
    },
    {
        question: "Find the real roots of the equation: x^3 - 6x^2 + 11x - 6 = 0",
        options: ["x = 1, x = 2, x = 3", "x = 1, x = 3, x = 4", "x = 2, x = 4, x = 5", "x = 2, x = 3, x = 6"],
        correctAnswer: "x = 1, x = 2, x = 3"
    },
    {
        question: "Solve for x: log2(x) = 3",
        options: ["x = 2", "x = 4", "x = 6", "x = 8"],
        correctAnswer: "x = 8"
    },
    {
        question: "What is the value of the Maclaurin series expansion of e^x at x = 0?",
        options: ["e^x", "x + 1", "1 - x", "1 + x"],
        correctAnswer: "1 + x"
    },
    {
        question: "If a triangle has sides of length 7, 24, and 25, what type of triangle is it?",
        options: ["Equilateral", "Isosceles", "Scalene", "Right Triangle"],
        correctAnswer: "Right Triangle"
    },
    {
        question: "Solve for x: 2^(2x) = 32",
        options: ["x = 1", "x = 2", "x = 3", "x = 4"],
        correctAnswer: "x = 2"
    },
    {
        question: "Find the value of the integral from 0 to 1 of x^2 dx.",
        options: ["1/4", "1/3", "1/2", "1"],
        correctAnswer: "1/3"
    },
    {
        question: "Calculate the derivative of cos(x) + sin(2x).",
        options: ["-sin(x) + 2cos(2x)", "-sin(x) + 2cos(x)", "cos(x) - 2sin(2x)", "cos(x) + 2sin(2x)"],
        correctAnswer: "-sin(x) + 2cos(x)"
    }
];

// Shuffle function to randomize the order of elements in an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the questions array
shuffleArray(questions);

// ... (remaining code)
    

let currentQuestionIndex = 0;
let correctAnswers = 0;

function showQuestion(question) {
    questionElement.textContent = question.question;
    options.forEach((option, index) => {
        option.textContent = question.options[index];
    });
}

function checkAnswer(selectedOption) {
    const selectedAnswer = selectedOption.textContent;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = 'Correct!';
        correctAnswers++;
    } else {
        resultElement.textContent = 'Incorrect. The correct answer is ' + correctAnswer;
    }
    
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        resultElement.textContent = '';
    } else {
        questionElement.textContent = 'Quiz completed!';
        options.forEach(option => {
            option.style.display = 'none';
        });
        showResult(correctAnswers);
    }

    updateProgressBar();
}



function showResult(correctCount) {
    const percentage = (correctCount / questions.length) * 100;
    resultElement.textContent = `Congratulations You scored ${percentage.toFixed(2)}%`;
    resultElement.classList.add('scored-result');
}

function updateProgressBar() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = progress + '%';
}

showQuestion(questions[currentQuestionIndex]);
