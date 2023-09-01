const questionElement = document.getElementById('question');
const options = document.querySelectorAll('.option');
const resultElement = document.getElementById('result');
const progressBar = document.getElementById('progress-bar');


const questions = [
    {
        question: "What is the sum of 8 and 12?",
        options: ["18", "20", "22", "24"],
        correctAnswer: "20"
    },
        {
            question: "What is the sum of 8 and 12?",
            options: ["18", "20", "22", "24"],
            correctAnswer: "20"
        },
        {
            question: "Subtract 5 from 15.",
            options: ["8", "9", "10", "11"],
            correctAnswer: "10"
        },
        {
            question: "Multiply 6 by 7.",
            options: ["36", "42", "48", "54"],
            correctAnswer: "42"
        },
        {
            question: "Divide 36 by 4.",
            options: ["6", "8", "9", "10"],
            correctAnswer: "9"
        },
        {
            question: "Calculate 20% of 150.",
            options: ["20", "30", "40", "50"],
            correctAnswer: "30"
        },
        {
            question: "Solve for x: 3x + 7 = 22.",
            options: ["3", "5", "6", "8"],
            correctAnswer: "5"
        },
        {
            question: "Simplify the expression: 2(x + 3) - 5x.",
            options: ["-3x + 6", "x - 6", "3x + 6", "2x + 6"],
            correctAnswer: "-3x + 6"
        },
        {
            question: "If 2x + 5 = 13, find the value of x.",
            options: ["3", "4", "6", "8"],
            correctAnswer: "4"
        },
        {
            question: "Factor the quadratic expression: x^2 - 9.",
            options: ["(x - 3)(x + 3)", "(x - 1)(x + 1)", "(x - 2)(x + 2)", "(x - 4)(x + 4)"],
            correctAnswer: "(x - 3)(x + 3)"
        },
        {
            question: "Solve the equation: 2(2x - 3) = 10.",
            options: ["x = 2", "x = 3", "x = 4", "x = 5"],
            correctAnswer: "x = 4"
        },
            {
                question: "What is the area of a rectangle with length 10 units and width 5 units?",
                options: ["15 square units", "25 square units", "40 square units", "50 square units"],
                correctAnswer: "50 square units"
            },
            {
                question: "Find the circumference of a circle with a radius of 8 units.",
                options: ["16π units", "32π units", "64π units", "128π units"],
                correctAnswer: "16π units"
            },
            {
                question: "Calculate the volume of a cube with side length 6 units.",
                options: ["36 cubic units", "72 cubic units", "216 cubic units", "432 cubic units"],
                correctAnswer: "216 cubic units"
            },
            {
                question: "In a right triangle, if one leg is 5 units and the hypotenuse is 13 units, what is the length of the other leg?",
                options: ["8 units", "10 units", "12 units", "15 units"],
                correctAnswer: "12 units"
            },
            {
                question: "Convert 3/5 into a decimal.",
                options: ["0.3", "0.5", "0.6", "0.8"],
                correctAnswer: "0.6"
            },
            {
                question: "Add 1/4 and 2/3.",
                options: ["5/12", "7/12", "11/12", "15/12"],
                correctAnswer: "11/12"
            },
            {
                question: "Subtract 0.75 from 1.5.",
                options: ["0.25", "0.5", "0.75", "1.0"],
                correctAnswer: "0.75"
            },
            {
                question: "Multiply 0.6 by 2.5.",
                options: ["1.25", "1.5", "1.75", "2.0"],
                correctAnswer: "1.5"
            },
            {
                question: "Divide 1.2 by 0.4.",
                options: ["2", "3", "4", "5"],
                correctAnswer: "3"
            },
            {
                question: "Jane bought 3 shirts for $20 each and 2 pairs of jeans for $30 each. How much did she spend in total?",
                options: ["$40", "$80", "$110", "$120"],
                correctAnswer: "$120"
            },
 
    
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
